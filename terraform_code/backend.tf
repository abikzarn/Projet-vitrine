terraform {
   backend "s3" {
    bucket         = "terraform-state-bucket-92"
    key            = "ec2/redhat9/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }  

}