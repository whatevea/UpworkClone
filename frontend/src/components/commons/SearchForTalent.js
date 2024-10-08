import React, { useEffect, useState } from "react";
import http from "../../config/http";
import ImageModal from "./ImageModal";
import {
  FaUserCircle,
  FaArrowLeft,
  FaArrowRight,
  FaRegEnvelope,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchForTalent = () => {
  const [userData, setUserData] = useState(null);
  const [portfolios, setPortfolios] = useState({});
  const [portfolio, setPortfolio] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const loggedInUserData = useSelector((state) => state.User);
  const hirerUserId = loggedInUserData?.userData?._id;

  console.log("loggedInUserData is", loggedInUserData);
  console.log("userData is", userData);

  const fetchPortfoliosByUserId = async (userId) => {
    console.log("userId:", userId);

    try {
      const response = await http.get(`/portfolio/get-portfolio/${userId}`);

      console.log("response.data:", response.data.portfolios);
      setPortfolios((prevPortfolios) => ({
        ...prevPortfolios,
        [userId]: response.data.portfolios,
      }));
    } catch (error) {
      console.error(`Error fetching portfolios for user ${userId}:`, error);
    }
  };

  useEffect(() => {
    // Function to fetch job posts from the backend
    const fetchUsers = async () => {
      try {
        const response = await http.get("/auth/getBulkUserData");
        setUserData(response.data.data); // Assuming the response contains job posts data
        response.data.data.forEach((user) => fetchPortfoliosByUserId(user._id));
      } catch (error) {
        console.error("Error fetching User Data:", error);
      }
    };

    fetchUsers(); // Call the function when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleImageClick = (imageLink, portfolio) => {
    setSelectedImage(imageLink);
    setPortfolio(portfolio);
  };

  const contactFreelancer = async (userId) => {
    // in this code check whether contract exists or not if not create a new one if exists fetch that contract and create chat with existing one or create new one
    // userId is employee
    // hirerUserId is job_provider

    const response = await http.get(
      `/contract/getContractByEmployeeIdAndHirerId/${userId}/${hirerUserId}`
    );

    console.log("response is inside contactFreelancer:", response);

    try {
      console.log("userId is", userId);
      // Data to be sent in the POST request body
      // const requestData = {
      //   employee: userId,
      //   hirer: jobProviderDetails._id,
      //   job: job_id,
      //   start_date: new Date(),
      // };

      // Make a POST request to the '/chats/conversationRoom' endpoint
      // const response = await http.post("/contract/psuedoContract", requestData);

      // Navigate to the message page with the provided state
      navigate("/hirer/message", {
        state: {
          userId,
          // jobProviderDetails,
          userData: userData[userId],
        },
      });
    } catch (error) {
      // Handle error
      console.error("Error creating chat room:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 m-4 bg-white rounded-xl shadow-md gap-4 ">
      {userData?.map((user) => (
        <div
          className="flex flex-col md:flex-row p-5 w-full md:w-3/4 bg-gray-100 items-center justify-between rounded-lg shadow-md "
          key={user?._id}
        >
          <div className="flex flex-col md:flex-row md:w-3/4 justify-between gap-2">
            <div className="flex flex-col justify-center items-center bg-green-100 p-3 rounded-lg md:w-[30%]">
              <FaUserCircle size={50} className="mb-2 text-green-600" />
              <p className="text-gray-800 text-center font-semibold">
                {user.fname.toUpperCase()} {user.lname.toUpperCase()}
              </p>
            </div>
            <div className="flex flex-col bg-green-100 p-2 rounded-lg md:w-[70%]">
              <div className="text-gray-800 font-semibold">
                {/* <h1 className="text-base mt-2 mb-2">Users Bio:</h1>
                <div className="inset-x-0 px-4 py-2 text-sm font-semibold">
                  {user.bio}
                </div> */}
                <h1 className="text-base mt-2">Skills:</h1>
                <div className="flex flex-wrap gap-1 md:flex-row inset-x-0 px-4 py-2 items-center mt-2">
                  {user.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="ml-2 px-3 py-1.5 rounded-lg flex items-center text-sm font-semibold bg-gray-300"
                    >
                      {skill.label}{" "}
                    </span>
                  ))}
                </div>
                <h1 className="text-base mt-2">Website Portfolio:</h1>
                <div>
                  {portfolios[user._id]?.length > 0 ? (
                    <div className="flex gap-2 flex-wrap mt-2">
                      {/* <h1 className="text-base mt-2 mb-2">
                        Website Portfolios:
                      </h1> */}
                      {portfolios[user._id].map((portfolio) => (
                        // <div key={portfolio._id}>
                        <img
                          key={portfolio._id}
                          src={portfolio.imageLink}
                          className="w-[20%] rounded-lg hover:cursor-pointer"
                          onClick={() =>
                            handleImageClick(portfolio.imageLink, portfolio)
                          }
                        />
                        // </div>
                      ))}
                    </div>
                  ) : (
                    <p>No portfolios found for this user.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <button
            className="bg-green-600 px-4 py-2 rounded hover:bg-green-500 text-white font-semibold flex items-center mt-4 md:mt-0 md:ml-4"
            onClick={() => contactFreelancer(user?._id)}
          >
            {/* <FaRegEnvelope className="text-lg inline mr-2" />
             */}
            Contact Freelancer
          </button>
        </div>
      ))}
      {selectedImage && (
        <ImageModal
          imageLink={selectedImage}
          portfolio={portfolio}
          onClose={() => setSelectedImage(null)}
        />
      )}
      {/* Pagination */}
      {/* <div className="flex mt-6">
        <button className="p-2 mx-1 text-lg rounded bg-green-600 hover:bg-green-500 text-white font-semibold">
          <FaArrowLeft className="inline mr-1" /> Prev Page
        </button>
        <button className="p-2 mx-1 text-lg rounded bg-green-600 hover:bg-green-500 text-white font-semibold">
          1
        </button>
        <button className="p-2 mx-1 text-lg rounded bg-gray-200 text-black font-semibold">
          2
        </button>
        <button className="p-2 mx-1 text-lg rounded bg-green-600 hover:bg-green-500 text-white font-semibold">
          3
        </button>
        <button className="p-2 mx-1 text-lg rounded bg-green-600 hover:bg-green-500 text-white font-semibold">
          Next Page <FaArrowRight className="inline ml-1" />
        </button>
      </div> */}
    </div>
  );
};

export default SearchForTalent;
