import { format } from "date-fns";
import { useState } from "react";
import {Calendar} from "./components/Calendar/index";
import Button from "./components/Button/Button";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSetToday = () => setCurrentDate(new Date());

  return (
    <div>
      <div className="flex flex-col items-center gap-4">
        <p>
          <strong>Selected Date: </strong>
          {format(currentDate, "dd LLLL yyyy")}
        </p>

        <Button onClick={handleSetToday}>Today</Button>
      </div>

      <Calendar />
    </div>
  );
};

export default App;