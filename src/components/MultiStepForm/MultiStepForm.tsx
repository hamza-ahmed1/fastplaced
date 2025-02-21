import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import $ from 'jquery'

type FormData = {
  profilePic: FileList | null;
  country: string;
  city: string;
  languages: string[];
  experienceType: string;
  lastEducation: string;
  collegeName: string;
  mainGoal: string;
  targetDomains: string[];
  targetCompanies: string[];
  preparationTimeline: string;
  mentorshipHelp: string;
  problemsFacing: string;
  expectedSalary: string;
};

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      profilePic: null,
      country: "",
      city: "",
      languages: [],
      experienceType: "",
      lastEducation: "",
      collegeName: "",
      mainGoal: "",
      targetDomains: [],
      targetCompanies: [],
      preparationTimeline: "",
      mentorshipHelp: "",
      problemsFacing: "",
      expectedSalary: "",
    },
  });

  const onSubmit = (data: FormData) => {  
    console.log("Final Submission:", data);
  };
// blur and focus events:
useEffect(() => {
  // Focus and blur events to handle error messages
  $('#country').focus(function () {
    $('.country-error').text(""); 
  });
  $('#country').blur(function () {
    if(!$('#country').val())
    {
      $('.country-error').text("Country is required!");
    }
  });
}, []);
  const handleNext = () => {
    if (currentStep === 1) {
      const country = $('#country').val(); 

// ---------------------Country Error Section------------------------Author hamza A.K
      if (!country) {
        $('.country-error').text("Country is required!");
        return; // can't go to next page
      }
  
  //   regex to varify only string
      const isValidCountry = /^[a-zA-Z\s]*$/.test(country);
      if (!isValidCountry) {
        $('.country-error').text("invalid country name! only letters are allowed");
        return; // can't go to next page
      }
    }

// ----------------------END of country validation------------------------- 
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Step Indicator */}
      <div className="flex justify-between mb-8 mt-8">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`w-1/3 text-center ${
              currentStep === step ? "font-bold text-primary" : "text-gray-500"
            }`}
          >
            Step {step}
          </div>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 1 && (
          <div className="space-y-4">
            {/* Profile Picture */}
            <div>
              <label className="block mb-2">Profile Picture</label>
              <input
                type="file"
                className="file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-primary file:text-white"
              />

            </div>

            {/* Country */}
            <div>
              <label className="block mb-2" >Country</label>
              <input
                type="text"
                className="border w-full px-4 py-2"
                id="country"
              />

              <div className="country-error error-message "></div>
            </div>

            {/* City */}
            <div>
              <label className="block mb-2">City</label>
              <input
                type="text"
                className="border w-full px-4 py-2"
              />
            </div>

            {/* Languages */}
            <div>
              <label className="block mb-2">Languages</label>
              <select
                multiple
                className="border w-full px-4 py-2"
              >
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
                <option value="German">German</option>
              </select>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            {/* Experience Type */}
            <div>
              <label className="block mb-2">Experience Type</label>
              <select className="border w-full px-4 py-2">
                <option value="">Select</option>
                <option value="student">Student</option>
                <option value="worker">Worker</option>
                <option value="part-timer">Part Timer</option>
              </select>
            </div>

            {/* Last Education */}
            <div>
              <label className="block mb-2">Last Education</label>
              <input
                type="text"
                className="border w-full px-4 py-2"
              />

            </div>

            {/* College Name */}
            <div>
              <label className="block mb-2">College Name</label>
              <input
                type="text"
                className="border w-full px-4 py-2"
              />

            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            {/* Main Goal */}
            <div>
              <label className="block mb-2">Main Goal</label>
              <select  className="border w-full px-4 py-2">
                <option value="">Select</option>
                <option value="placements">Preparing for placements</option>
                <option value="higherStudies">Higher Studies</option>
                <option value="careerSwitch">Career Switch</option>
                <option value="skillDevelopment">Skill Development</option>
              </select>
              
            </div>

            {/* Expected Salary */}
            <div>
              <label className="block mb-2">Expected Salary (Rs)</label>
              <input
                type="text"
                className="border w-full px-4 py-2"
              />
             
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <button type="button" onClick={handlePrev} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
              Previous
            </button>
          )}
          {currentStep < 3 ? (
            <button type="button" onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Next
            </button>
          ) : (
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;