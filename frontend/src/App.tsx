import {Calendar} from "./components/Calendar/index";
import CalendarContextWrapper from "./context/CalendarContext/CalendarContext";

const App = () => {
  return (
      <>
        {/* <p>
          <strong>Selected Date: </strong>
          {format(currentDate, "dd LLLL yyyy")}
        </p>
        <Button onClick={handleSetToday}>Today</Button> */}
      <CalendarContextWrapper>
        <Calendar />
      </CalendarContextWrapper>
    </>
  );
};

export default App;