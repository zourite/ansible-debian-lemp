
![Logo](https://i.imgur.com/befpNB2.png)

<p align="center">
  <strong>Ansible-powered LEMP stack</strong>
  <br />
  Built with ❤️
</p>

[![portfolio](https://img.shields.io/badge/me-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://saugrin-sonia.fr/) [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ssaugrin/) [![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/zourite)

## Overview

Ansible playbooks for setting up a LEMP stack.

- Local development environment with Vagrant
- Install a website on a production servers (WordPress, Matomo...)
- Install and configure basically <a href="https://zsh.sourceforge.io/" target="_blank">Zsh</a> and <a href="https://ohmyz.sh/" target="_blank">OhMyZsh !</a> For more, more love :heart_eyes:

## Requirements

Make sure all dependencies have been installed before moving on :

### Local development

    Virtualbox >= 4.3.10
    Vagrant >= 2.1.0
  
### Production / Staging Server

    Debian >= 9

## Usage

You can configure relevant settings for mysql and php in ``roles/{php|mysql}/defaults/main.yml``.

Set ssh keys, if necessary, in ``roles/init/defaults/main.yml``.

Run ```ansible-playbook playbook.yml``` and let the magic work.

  