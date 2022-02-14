import "../App.css";
import { Range } from "react-range";

const RangePrice = (props) => {
  const { range, setRange } = props;
  return (
    <div>
      <Range
        step={5}
        min={0}
        max={500}
        values={range}
        onChange={(range) => setRange(range)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "5px",
              width: "316px",
              backgroundColor: "#ccc",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ index, props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "17px",
              width: "17px",
              backgroundColor: "#40aeb7",
              borderRadius: "50%",
            }}
          >
            {/* //labled-part */}
            <div
              style={{
                position: "absolute",
                top: "-28px",
                color: "#fff",
                // fontWeight: "bold",
                fontSize: "14px",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                padding: "4px",
                borderRadius: "4px",
                backgroundColor: "#40aeb7",
              }}
            >
              {range[index].toFixed(0)}€
            </div>
            <div
              style={{
                height: "16px",
                width: "5px",
                // backgroundColor: isDragged ? "#548BF4" : "#CCC",
              }}
            ></div>
            {/* //labled-part - end */}

            {/* ajoutde la fermeture div : */}
          </div>
        )}

        // fermeture range
      />
    </div>
  );
};

export default RangePrice;
