import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a React app lo leave feedback for a product or service.</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Go back to Home</Link>
        </p>
      </div>
    </Card>
  );
}
export default AboutPage;
