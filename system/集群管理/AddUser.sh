#!/bin/bash
#

if [[ $# -ne 1 ]]   			//如果没有检测到输入就提示用法
then
    echo "usage:$0 username"
    exit 1
fi

#add user
#GROUP=users
BASE="/share/home"				//给定家目录位置
HOME="${BASE}/${1}"				//家目录名称
useradd -d $HOME -G gauss $1	//以gauss为用户组，$HOME为家目录建立账户
#init password
echo "111111" | passwd --stdin $1	//将111111这个密码作为标准输入导入到新建的$1账户中使之可用。
#ssh 
su -c "ssh-keygen" $1				//建立密钥对
su -c "cat ~/.ssh/id_rsa.pub >~/.ssh/authorized_keys " $1	/*因为家目录挂在阵列上，所有机器可读，因此在管理节点上指定位置放入的已鉴权密钥就能实现免密码登录。*/
su -c "echo 'StrictHostKeyChecking no'>~/.ssh/config" $1	//放弃审查服务器指纹信息，使SSH完全自由访问。
#update nis db
for x in cpu1 cpu2 cpu3 cpu4 		//同步密码。
	do
		echo $x
		scp /etc/passwd $x:/etc
		scp /etc/group  $x:/etc
		scp /etc/shadow $x:/etc
		scp /etc/gshadow $x:/etc
	done
