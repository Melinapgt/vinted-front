import "../App.css";
import Switch from "react-switch";

const PriceSort = (props) => {
  const { toggle, setToggle } = props;
  const handleSwitchChange = (checked) => {
    setToggle(checked);
  };
  return (
    <div>
      <Switch
        onChange={handleSwitchChange}
        checked={toggle}
        className="toggle-switch"
        onColor="#40aeb7"
        offColor="#40aeb7"
        height={20}
        width={42}
        uncheckedIcon={false}
        checkedIcon={false}
        checkedHandleIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
            }}
          >
            ⇣
          </div>
        }
        uncheckedHandleIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 15,
            }}
          >
            ⇡
          </div>
        }
      />
    </div>
  );
};

export default PriceSort;
