const Loading = ({ specialNames, element, index }) => {
  const title = element[index]?.title;

  // Define colors for each name
  const nameColors = {
    "Anoop sharma": "orange",
    Yogesh: "green",
    "Shankar Kumar": "violet",
    Ramesh: "pink",
    Suresh: "grey",
  };

  // Get the color based on the title
  const color = nameColors[title] || "gray"; // Default color if title is not in the mapping

  return (
    <span>
      {title === "Anoop sharma" ? (
        <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {specialNames.includes(title) && (
            <span
              className="imageContainer"
              style={{
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: color,
                color: "#fff",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              <div
                style={{
                  width: "95%",
                  height: "95%",
                  borderRadius: "50%",
                  backgroundColor: color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {title
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>
              <div className="showStatus"></div>
            </span>
          )}
          {title} {element[index]?.value?.length}
        </span>
      ) : title === "Yogesh" ? (
        <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {specialNames.includes(title) && (
            <span
              className="imageContainer"
              style={{
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: color,
                color: "#fff",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              <div
                style={{
                  width: "95%",
                  height: "95%",
                  borderRadius: "50%",
                  backgroundColor: color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {title
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>
              <div className="showStatus"></div>
            </span>
          )}
          {title} {element[index]?.value?.length}
        </span>
      ) : title === "Shankar Kumar" ? (
        <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {specialNames.includes(title) && (
            <span
              className="imageContainer"
              style={{
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: color,
                color: "#fff",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              <div
                style={{
                  width: "95%",
                  height: "95%",
                  borderRadius: "50%",
                  backgroundColor: color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {title
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>
              <div className="showStatus"></div>
            </span>
          )}
          {title} {element[index]?.value?.length}
        </span>
      ) : title === "Ramesh" ? (
        <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {specialNames.includes(title) && (
            <span
              className="imageContainer"
              style={{
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: color,
                color: "#fff",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              <div
                style={{
                  width: "95%",
                  height: "95%",
                  borderRadius: "50%",
                  backgroundColor: color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {title
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>
              <div className="showStatus"></div>
            </span>
          )}
          {title} {element[index]?.value?.length}
        </span>
      ) : title === "Suresh" ? (
        <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          {specialNames.includes(title) && (
            <span
              className="imageContainer"
              style={{
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: color,
                color: "#fff",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              <div
                style={{
                  width: "95%",
                  height: "95%",
                  borderRadius: "50%",
                  backgroundColor: color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {title
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>
              <div className="showStatus"></div>
            </span>
          )}
          {title} {element[index]?.value?.length}
        </span>
      ) : (
        <span>
          {specialNames.includes(title) && (
            <span
              className="imageContainer"
              style={{
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: "gray",
                color: "#fff",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              <div
                style={{
                  width: "95%",
                  height: "95%",
                  borderRadius: "50%",
                  backgroundColor: "gray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {title
                  .split(" ")
                  .map((name) => name[0])
                  .join("")}
              </div>
              <div className="showStatus"></div>
            </span>
          )}
          {title} {element[index]?.value?.length}
        </span>
      )}
    </span>
  );
};

export default Loading;
