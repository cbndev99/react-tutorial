function Button() {
  // inline styling
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    marginBottom: "10px",
  }

  return <button style={styles}>CLICK ME</button>
}
export default Button
