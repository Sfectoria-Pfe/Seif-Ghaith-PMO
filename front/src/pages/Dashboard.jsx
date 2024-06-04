import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import bondImg from "../images/bondImg.png";
import valide from "../images/valide.png";
import enCours from "../images/enCours.png";
import rejete from "../images/rejete.png";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getentree_devices } from "../store/entree_device";
import { getorderreparations } from "../store/order_reparation";

function Dashboard() {
  const Store = useSelector((state) => state.entree_device.entree_devices);
  const storeorder = useSelector((state) => state.orderreparation.orderreparations);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getentree_devices());
    dispatch(getorderreparations());

  }, []);

  var completed=0
  const tot = storeorder.forEach((row) => {
    if (row.status==="completed") {
      completed+=1
    }
  });

  var onhold=0
  const jsp = storeorder.forEach((row) => {
    if (row.status==="onhold") {
      onhold+=1
    }
  });

  var inProgress=0
  const a = storeorder.forEach((row) => {
    if (row.status==="inProgress") {
      inProgress+=1
    }
  });
  return (
    <div>
      <div>
        <p style={{ fontSize: 28 }}>Tableau de bord</p>
        <div className="d-flex justify-content-center gap-4">
          <div>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <div className="d-flex gap-4 ">
                  <Typography
                    sx={{ fontSize: 20, fontWeight: "bold" }}
                    color="text.dark"
                    gutterBottom
                  >
                    Total Bons d'entée
                  </Typography>

                  <div>
                    <img src={bondImg} style={{ width: 40, height: 40 }} />
                  </div>
                </div>

                <div className="text-center">
                  <p style={{ fontSize: 30 }}>{Store.length}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <div className="d-flex gap-4 ">
                  <Typography
                    sx={{ fontSize: 20, fontWeight: "bold" }}
                    color="text.dark"
                    gutterBottom
                  > Bons d'entée valider </Typography>
 
                  <div>
                    <img src={valide} style={{ width: 40, height: 40 }} />
                  </div>
                </div>
                <div className="text-center">
                  <p style={{ fontSize: 30 }}>{inProgress }</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <div className="d-flex gap-4 ">
                  <Typography
                    sx={{ fontSize: 20, fontWeight: "bold" }}
                    color="text.dark"
                    gutterBottom
                  >
                    Bons d'entée en cours
                  </Typography>

                  <div>
                    <img src={enCours} style={{ width: 40, height: 40 }} />
                  </div>
                </div>
                <div className="text-center">
                  <p style={{ fontSize: 30 }}>{inProgress}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <div className="d-flex gap-4 ">
                  <Typography
                    sx={{ fontSize: 20, fontWeight: "bold" }}
                    color="text.dark"
                    gutterBottom
                  >
                    Bons d'entée en attende
                  </Typography>

                  <div>
                    <img src={rejete} style={{ width: 40, height: 40 }} />
                  </div>
                </div>
                <div className="text-center">
                  <p style={{ fontSize: 30 }}>{onhold}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center pt-1 mt-5 container border mr-9">
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [4, 11, 2, 8.5, 1.5, 5],
              area: true,
            },
          ]}
          width={800}
          height={300}
        />
        <div className="">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </div>
      </div>
      <div className=" d-flex justify-content-center mt-4">
        <div>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "series A" },
                  { id: 1, value: 15, label: "series B" },
                  { id: 2, value: 20, label: "series C" },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
