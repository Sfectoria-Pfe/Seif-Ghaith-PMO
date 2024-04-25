import {
  Card,
  CardHeader,
  CardBody,
  Typography,
}from "@material-tailwind/react";

export default function Profile() {
  return (
    <div className="pt-2 bg-blue-gray-50" style={{height:759}}>
      <div className="d-flex justify-content-center pb-14">
        <Card className="w-96 ">
          <CardHeader floated={false} className="h-80">
            <img
              src="https://docs.material-tailwind.com/img/team-3.jpg"
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center" floated={false}>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Natalie Paisley
            </Typography>
          </CardBody>
        </Card>
      </div>
      <div className="d-flex justify-content-around">
      <Card style={{width:"46%"}} className="">
        <CardBody>
          <div className="flex align-items-center pb-3">
        <Typography variant="h6" color="blue-gray" className="m-0">
              Nom et Prenom : 
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              foulen ben foulen
            </Typography>
          </div>
            <div className="flex align-items-center pb-3">
            <Typography variant="h6" color="blue-gray" className="m-0">
              Nom et Prenom : 
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              foulen ben foulen
            </Typography>
            </div>
            <div className="flex align-items-center pb-3">
            <Typography variant="h6" color="blue-gray" className="m-0">
              Nom et Prenom : 
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              foulen ben foulen
            </Typography>
            </div>
            <div className="flex align-items-center pb-3">
            <Typography variant="h6" color="blue-gray" className="m-0">
              Nom et Prenom : 
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              foulen ben foulen
            </Typography>
            </div>
        </CardBody>
      </Card>
      <Card style={{width:"46%"}} className="">
        <CardBody>
          <div className="flex align-items-center pb-3">
        <Typography variant="h6" color="blue-gray" className="m-0">
              Nom et Prenom : 
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              foulen ben foulen
            </Typography>
          </div>
            <div className="flex align-items-center pb-3">
            <Typography variant="h6" color="blue-gray" className="m-0">
              Nom et Prenom : 
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              foulen ben foulen
            </Typography>
            </div>
            <div className="flex align-items-center pb-3">
            <Typography variant="h6" color="blue-gray" className="m-0">
              Nom et Prenom : 
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              foulen ben foulen
            </Typography>
            </div>
            <div className="flex align-items-center pb-3">
            <Typography variant="h6" color="blue-gray" className="m-0">
              Nom et Prenom : 
            </Typography>
            <Typography color="blue-gray" className="font-medium" textGradient>
              foulen ben foulen
            </Typography>
            </div>
        </CardBody>
      </Card>
      </div>
      
    </div>
  );
}
