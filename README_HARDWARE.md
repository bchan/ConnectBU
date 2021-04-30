# Hardware Report

Our project is a software only project, so the only hardware components used are the cloud instances used to host the frontend and backend, servers to handle DNS, and the user’s own computer.

### Route53
Handles the routing for the DNS records for the domain (connectbu.com). This sends the web traffic from the user’s browser to the corresponding frontend or backend load balancer. This also handles the nameservers that are used for the DNS records.
  
  
### Application Load Balancers (ALBs)
There are two ALBs in our project. One of them is for the frontend and one of them is for the backend. These handle the distribution of web traffic when instances are spun up.

- Frontend ALB:
Takes in traffic for [connectbu.com](connectbu.com) and www.connectbu.com and routes this to the target group for the frontend instance.
- Backend ALB:
Takes in traffic for api.connectbu.com and routes this to the target group for the backend instance.
  
  
### EC2 Instances
- Frontend instance: This instance is running Ubuntu Server 20.04 LTS and has a size of t2.micro. This instance is running nginx as the webserver to host the frontend of our website.
- Backend instance: This instance is running Ubuntu Server 20.04 LTS and has a size of t2.micro. This instance is running the Flask backend for our application and is our custom API.

