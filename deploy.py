import os
import argparse
import pexpect
import getpass

# Args
parser = argparse.ArgumentParser(description='Args for run command.')
parser.add_argument("--step", type=int, default=3)
parser.add_argument("--id", type=str, default='root')
parser.add_argument("--password", type=str, default=None)  # Mật khẩu không còn trong args
parser.add_argument("--env", type=str, default='dev', help='Environment for React build')  # Thêm biến môi trường
args = parser.parse_args()

fileName = 'fe.tar.gz'

if args.password is None:
    password = getpass.getpass(prompt='Enter password: ')
else:
    password = args.password

domain = '14.225.204.72'
fileTempPath = f'./tmp/{fileName}'
deploySource = f'/home/{args.id}'
deploySourceExtract = f'/home/fe/build'

def run_command(command):
    child = pexpect.spawn(command)
    i = child.expect([pexpect.TIMEOUT, 'password:', 'Are you sure you want to continue connecting (yes/no)?'], timeout=60)

    if i == 0:  # Timeout
        print("Lỗi: Timeout khi chờ phản hồi.")
        return None
    elif i == 2:  # Yes/no confirmation
        child.sendline('yes')
        child.expect('password:', timeout=60)

    child.sendline(password)
    child.expect(pexpect.EOF, timeout=120)
    return child.before.decode('utf-8')

if args.step >= 3:
    print(f'=== 1. Building {args.env} ===')
    os.system(f'''
    rm -rf ./build/*
    rm -rf {fileTempPath}
    export REACT_APP_ENV={args.env}  # Sử dụng biến môi trường từ args
    npm run build
    mkdir -p tmp
    cd ./build && tar -czf ../{fileTempPath} . && cd ..
    ''')

if args.step >= 2:
    print(f'=== 2. Uploading file {args.env} ===')
    scp_command = f'scp -P 22 {fileTempPath} {args.id}@{domain}:{deploySource}'
    run_command(scp_command)

if args.step >= 1:
    print(f'=== 3. Deployment {args.env} ===')
    ssh_command = f'ssh {args.id}@{domain} -p 22 "sudo tar xzfp {deploySource}/{fileName} -C {deploySourceExtract}"'
    run_command(ssh_command)