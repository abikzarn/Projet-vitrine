
# Security Group avec règles SSH, HTTP, HTTPS
resource "aws_security_group" "ssh_http_https" {
  name        = "ssh-http-https"
  description = "Allow SSH (22), HTTP (80) and HTTPS (443) from anywhere"
  vpc_id      = data.aws_vpc.default.id

  ingress {
    description      = "SSH"
    from_port        = 22
    to_port          = 22
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "HTTP"
    from_port        = 80
    to_port          = 80
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  ingress {
    description      = "HTTPS"
    from_port        = 443
    to_port          = 443
    protocol         = "tcp"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  egress {
    from_port        = 0
    to_port          = 0
    protocol         = "-1"
    cidr_blocks      = ["0.0.0.0/0"]
    ipv6_cidr_blocks = ["::/0"]
  }

  tags = {
    Name = "sg-ssh-http-https"
    project = "DEVOPS0"
  }
}

# Récupérer le VPC par défaut (sinon tu peux passer un VPC ID en variable)
data "aws_vpc" "default" {
  default = true
}

# Récupérer le subnet par défaut dans la région (zone de disponibilité 1)
data "aws_subnets" "default" {
  filter {
    name   = "vpc-id"
    values = [data.aws_vpc.default.id]
  }
}

resource "aws_instance" "redhat" {
  ami                         = var.ami_id
  instance_type               = var.instance_type
  subnet_id = tolist(data.aws_subnets.default.ids)[0]  # On prend le premier subnet de la liste
  vpc_security_group_ids      = [aws_security_group.ssh_http_https.id]
  key_name                    = "mypem"
  associate_public_ip_address = true

  tags = {
    Name = var.instance_name
    project = "DEVOPS0"
  }
}