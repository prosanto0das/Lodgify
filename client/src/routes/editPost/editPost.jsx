import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import "./editPost.scss";

function EditPostPage() {
  const { id } = useParams();
  const [form, setForm] = useState({});
  const [desc, setDesc] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPost() {
      try {
        // Adjust this according to your API's response structure
        const { data } = await apiRequest.get(`/posts/${id}`);
        setForm({
          title: data.title,
          price: data.price,
          address: data.address,
          city: data.city,
          bedroom: data.bedroom,
          bathroom: data.bathroom,
          type: data.type,
          property: data.property,
          latitude: data.latitude,
          longitude: data.longitude,
          mobileNumber: data.mobileNumber,
          email: data.email,
          // Fields from postDetail, use optional chaining
          utilities: data.postDetail?.utilities,
          pet: data.postDetail?.pet,
          income: data.postDetail?.income,
          size: data.postDetail?.size,
          school: data.postDetail?.school,
          bus: data.postDetail?.bus,
          restaurant: data.postDetail?.restaurant,
        });
        setDesc(data.postDetail?.desc || "");
        setImages(data.images || []);
        setLoading(false);
      } catch (err) {
        setError("Could not load post.");
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiRequest.put(`/posts/${id}`, {
        postData: {
          title: form.title,
          price: parseInt(form.price),
          address: form.address,
          city: form.city,
          bedroom: parseInt(form.bedroom),
          bathroom: parseInt(form.bathroom),
          type: form.type,
          property: form.property,
          latitude: form.latitude,
          longitude: form.longitude,
          images: images,
          mobileNumber: form.mobileNumber,
          email: form.email,
        },
        postDetail: {
          desc: desc,
          utilities: form.utilities,
          pet: form.pet,
          income: form.income,
          size: parseInt(form.size),
          school: parseInt(form.school),
          bus: parseInt(form.bus),
          restaurant: parseInt(form.restaurant),
        }
      });
      navigate("/" + id);
    } catch (err) {
      setError("Could not update post");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="editPostPage">
      <div className="formContainer">
        <h1>Edit Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input name="title" value={form.title || ""} onChange={handleChange} />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input name="price" type="number" value={form.price || ""} onChange={handleChange} />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input name="address" value={form.address || ""} onChange={handleChange} />
            </div>
            <div className="contact-container">
              <div className="item">
                <label htmlFor="mobileNumber">Mobile Number</label>
                <input name="mobileNumber" value={form.mobileNumber || ""} onChange={handleChange} />
              </div>
              <div className="item">
                <label htmlFor="email">Email</label>
                <input name="email" value={form.email || ""} onChange={handleChange} />
              </div>
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" value={desc} onChange={setDesc} />
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input name="city" value={form.city || ""} onChange={handleChange} />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input name="bedroom" type="number" value={form.bedroom || ""} onChange={handleChange} min={1} />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input name="bathroom" type="number" value={form.bathroom || ""} onChange={handleChange} min={1} />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" value={form.latitude || ""} onChange={handleChange} />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" value={form.longitude || ""} onChange={handleChange} />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type" value={form.type || "rent"} onChange={handleChange}>
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="property">Property</label>
              <select name="property" value={form.property || "apartment"} onChange={handleChange}>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities" value={form.utilities || "owner"} onChange={handleChange}>
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet" value={form.pet || "allowed"} onChange={handleChange}>
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input name="income" value={form.income || ""} onChange={handleChange} placeholder="Income Policy" />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input name="size" type="number" value={form.size || ""} onChange={handleChange} min={0} />
            </div>
            <div className="item">
              <label htmlFor="school">School</label>
              <input name="school" type="number" value={form.school || ""} onChange={handleChange} min={0} />
            </div>
            <div className="item">
              <label htmlFor="bus">Bus</label>
              <input name="bus" type="number" value={form.bus || ""} onChange={handleChange} min={0} />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input name="restaurant" type="number" value={form.restaurant || ""} onChange={handleChange} min={0} />
            </div>
            <button className="sendButton">Update</button>
            {error && <span style={{ color: "red" }}>{error}</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        <div className="image-grid">
          {images.map((image, index) => (
            <div className="image-item" key={index}>
              <img src={image} alt={`Uploaded image ${index + 1}`} />
              <button
                className="remove-btn"
                onClick={() => setImages(images.filter((_, i) => i !== index))}
                title="Remove image"
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="upload-widget-container">
          <UploadWidget
            uwConfig={{
              multiple: true,
              cloudName: "dfipsdi2k",
              uploadPreset: "prosantodas",
              folder: "posts",
              maxImageFileSize: 10000000,
            }}
            setState={setImages}
          >
            <div className="upload-icon">📁</div>
            <div className="upload-text">Click to upload images</div>
            <div className="upload-hint">Drag and drop images here or click to browse</div>
          </UploadWidget>
        </div>
      </div>
    </div>
  );
}

export default EditPostPage;