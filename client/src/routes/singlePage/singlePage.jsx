import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { useNavigate, useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

function SinglePage() {
  const post = useLoaderData();
  const [saved, setSaved] = useState(post.isSaved);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      const d = await apiRequest.delete(`/posts/${post.id}`);
      console.log(d);   
      alert("Post deleted!");
      navigate("/");
    } catch (err) {
      console.log(err); // Log the full error for debugging
      if (err.response && err.response.status === 403) {
        alert("Failed to delete post. You may only delete your own posts.");
      } else {
        alert("Failed to delete post. An unexpected error occurred.");
      }
    }
  };

  const handleSave = async () => {
    if (!currentUser) {
      navigate("/login");
    }
    setSaved((prev) => !prev);
    try {
      await apiRequest.post("/users/save", { postId: post.id });
    } catch (err) {
      console.log(err);
      setSaved((prev) => !prev);
    }
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent(`Inquiry about ${post.title}`);
    const body = encodeURIComponent(
      `Hi,\n\nI am interested in your listing "${post.title}".\n\nPlease provide more information.\n\nThanks,`
    );
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${post.email}&su=${subject}&body=${body}`;
    window.open(gmailURL, "_blank");
  };

  // (Optional: for debugging ownership check!)
  // console.log("currentUser:", currentUser);
  // console.log("post.user:", post.user);

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.postDetail.desc),
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title" style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1a237e",
            padding: "15px 0",
            margin: "30px 0 20px",
            borderBottom: "3px solid #7c4dff",
            borderTop: "3px solid #7c4dff",
            textAlign: "center",
            letterSpacing: "1px",
            textTransform: "uppercase",
            background: "linear-gradient(to right, rgba(124, 77, 255, 0.1), rgba(0, 229, 255, 0.1))",
            borderRadius: "8px"
          }}>General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                {post.postDetail.utilities === "owner" ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Tenant is responsible</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                {post.postDetail.pet === "allowed" ? (
                  <p>Pets Allowed</p>
                ) : (
                  <p>Pets not Allowed</p>
                )}
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Income Policy</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>

          <p className="title" style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1a237e",
            padding: "15px 0",
            margin: "30px 0 20px",
            borderBottom: "3px solid #7c4dff",
            borderTop: "3px solid #7c4dff",
            textAlign: "center",
            letterSpacing: "1px",
            textTransform: "uppercase",
            background: "linear-gradient(to right, rgba(124, 77, 255, 0.1), rgba(0, 229, 255, 0.1))",
            borderRadius: "8px"
          }}>Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{post.postDetail.size} sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>

          <p className="title" style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1a237e",
            padding: "15px 0",
            margin: "30px 0 20px",
            borderBottom: "3px solid #7c4dff",
            borderTop: "3px solid #7c4dff",
            textAlign: "center",
            letterSpacing: "1px",
            textTransform: "uppercase",
            background: "linear-gradient(to right, rgba(124, 77, 255, 0.1), rgba(0, 229, 255, 0.1))",
            borderRadius: "8px"
          }}>Contact</p>
          <div className="sizes">
            <div className="size">
              <img src="/phone.png" alt="" />
              <a href={`tel:${post.mobileNumber}`}>
                <span>{post.mobileNumber}</span>
              </a>
            </div>
            <div
              className="size"
              onClick={handleEmailClick}
              style={{ cursor: "pointer" }}
            >
              <img src="/email.png" alt="" />
              <span>{post.email}</span>
            </div>
          </div>

          <p className="title" style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1a237e",
            padding: "15px 0",
            margin: "30px 0 20px",
            borderBottom: "3px solid #7c4dff",
            borderTop: "3px solid #7c4dff",
            textAlign: "center",
            letterSpacing: "1px",
            textTransform: "uppercase",
            background: "linear-gradient(to right, rgba(124, 77, 255, 0.1), rgba(0, 229, 255, 0.1))",
            borderRadius: "8px"
          }}>Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>
                  {post.postDetail.school > 999
                    ? post.postDetail.school / 1000 + "km"
                    : post.postDetail.school + "m"}{" "}
                  away
                </p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className="title" style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1a237e",
            padding: "15px 0",
            margin: "30px 0 20px",
            borderBottom: "3px solid #7c4dff",
            borderTop: "3px solid #7c4dff",
            textAlign: "center",
            letterSpacing: "1px",
            textTransform: "uppercase",
            background: "linear-gradient(to right, rgba(124, 77, 255, 0.1), rgba(0, 229, 255, 0.1))",
            borderRadius: "8px"
          }}>Location</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <div className="buttons">
            <button
              onClick={handleSave}
              style={{
                backgroundColor: saved ? "#7c4dff" : "#00e5ff",
                color: "white",
                border: saved ? "1px solid #7c4dff" : "1px solid #00e5ff",
              }}
            >
              <img src="/save.png" alt="" />
              {saved ? "Place Saved" : "Save the Place"}
            </button>
            {currentUser && post.user && currentUser.id === post.user.id && (
              <>
                <button
                  onClick={() => navigate(`/edit/${post.id}`)}
                  style={{
                    backgroundColor: "#7c4dff",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  <img src="/edit.png" alt="" style={{ filter: "invert(1)" }} />
                  Update Post
                </button>
                <button
                  onClick={handleDelete}
                  style={{
                    backgroundColor: "#ff4081",
                    color: "white",
                    marginLeft: "10px",
                  }}
                >
                  <img src="/delete.png" alt="" style={{ filter: "invert(1)" }} />
                  Delete Post
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;