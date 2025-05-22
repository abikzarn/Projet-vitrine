variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "eu-central-1"  # Europe Frankfurt
}

variable "instance_type" {
  description = "Type of EC2 instance"
  type        = string
  default     = "t3.small"
}

variable "ami_id" {
  description = "AMI ID to use for the EC2 instance"
  type        = string
  default     = "ami-02b7d5b1e55a7b5f1"  # Amazon Linux 2023 (id lié à la région)
}

variable "instance_name" {
  description = "Name tag for the EC2 instance"
  type        = string
  default     = "Next-JS-Project"
}