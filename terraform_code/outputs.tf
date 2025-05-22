output "instance_id" {
  description = "ID of the EC2 instance"
  value       = aws_instance.redhat.id
}

output "instance_public_ip" {
  description = "Public IP of the EC2 instance"
  value       = aws_instance.redhat.public_ip
}

output "security_group_id" {
  description = "Security Group ID"
  value       = aws_security_group.ssh_http_https.id
}