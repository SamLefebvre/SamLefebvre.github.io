---
title: Implement SSH Keys
---

# How to implement SSH Keys in Ubuntu

SSH keys provide an easy, passwordless and secure way of logging into your server.

The following tutorial has been tested on *Ubuntu 18.04.2 LTS (GNU/Linux 4.9.140-tegra aarch64)*.

## Install a terminal


The following applications are recommended:

- Linux
  - The terminal can be open with <kbd>CTRL</kbd>+<kbd>Alt</kbd>+<kbd>T</kbd>
- Windows
  - [PuTTY](https://chocolatey.org/packages/putty.install) PuTTY is a free implementation of Telnet and SSH for Windows and Unix platforms.
  - [Git BASH](https://chocolatey.org/packages/git) Git for Windows provides a BASH emulation used to run Git from the command line.
- Android
  - [JuiceSSH](https://play.google.com/store/apps/details?id=com.sonelli.juicessh) Free SSH client for Android.


## Check for existing SSH keys

First, check whether there are already keys on the computer you are using:

``` bash
ls ~/.ssh
```

If you see files named `id_rsa.pub` or `id_dsa.pub` you have keys set up already, so you can [skip :fast_forward:](#copy-your-public-key-to-your-device) the generating keys step.

## Generate new SSH keys

To generate new SSH keys enter the following command:
``` bash
ssh-keygen
```

Leave the field empty for no passphrase.
Now look inside your .ssh directory:

``` bash
ls ~/.ssh
```

and you should see the files `id_rsa` and `id_rsa.pub`:

``` bash
authorized_keys  id_rsa  id_rsa.pub  known_hosts
```

The `id_rsa` file is your private key.

::: warning Privacy warning
Keep this on your computer. Do not share it!
:::

The `id_rsa.pub` file is your public key. This is what you share with machines you want to connect to. When the machine you try to connect to matches your public and private key, it will allow you to connect.

## Copy your public key to your device

Copy the file manually over SSH:

``` bash
cat ~/.ssh/id_rsa.pub | ssh <USER>@<IP-ADDRESS> "cat >> ~/.ssh/authorized_keys"
```

or paste it from the clipboard. Replace *<ID_RSA.PUB>* by your key.
``` bash
echo "<ID_RSA.PUB>" >> ~/.ssh/authorized_keys
```

::: danger Do not overwrite your existing keys!
**>** overwrite the file
**>>** append to the file
:::

Now try ssh `<USER>@<IP-ADDRESS>` and you should connect without a password prompt.


## Disable password authentication

Force the usage for the SSH Keys in WAN and keep the password access in LAN.

Edit the file `/etc/ssh/sshd_config`

``` bash
sudo vim /etc/ssh/sshd_config
```

Press <kbd>a</kbd> to edit in vim. Apply the fellow changes:

``` bash
PasswordAuthentication no
ChallengeResponseAuthentication no

Match Address 192.168.0.0/16
    PasswordAuthentication yes
```

Save and close the file.

>Press <kbd>ESC</kbd> and type `:wq`

Reload the ssh server:
``` bash
sudo systemctl reload ssh
```

::: tip
There are two [motd](https://en.wikipedia.org/wiki/Motd_(Unix) "message of the day"), when connecting with the ssh keys.
If you know how to fix this, please let me know.
:::

Done! :tada: