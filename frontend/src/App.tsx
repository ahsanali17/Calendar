import {Calendar} from "./components/Calendar/index";

const App = () => {
  return (
      <>
        {/* <p>
          <strong>Selected Date: </strong>
          {format(currentDate, "dd LLLL yyyy")}
        </p>
        <Button onClick={handleSetToday}>Today</Button> */}
      <Calendar />
    </>
  );
};

export default App;