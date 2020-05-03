provider "aws" {}

resource "aws_instance" "devopsaws" {
  ami = "ami-07d0cf3af28718ef8"
  instance_type = "t2.medium"
  subnet_id = "subnet-59f1d777"
  key_name = "devopsawsclayton"
  tenancy = "default"
  associate_public_ip_address = true
  tags = { 
  Name = "devopsaws"
  }
 }
