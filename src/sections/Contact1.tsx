import React, { FC, useState } from "react";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import CityLocations from "./CityLocations";
import { enqueueSnackbar } from "notistack";

interface Props {
  data: any;
}

const Contact: FC<Props> = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const {name, email, message} = formData;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const { name, value } = e.target;
    setFormData((prev)=>({...prev, [name]: value}))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // alert('Email successfully sent!');
        enqueueSnackbar('Email successfully sent!', { anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        }, variant: 'success' })
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        // alert('Failed to send the email.');
        enqueueSnackbar('Failed to send the email.', { anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        }, variant: 'error' })
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while sending the email.');
    }
  };

  return (
    <>
      <main id="main">
        <div className="container">
          <div className="row">
            <section id="contact_us" className="contact-us hero-padding">
              <div className="container">
                <div className="section-header">
                  <h1>
                    {data?.elements?.title?.value.replace(/(<([^>]+)>)/gi, "")}
                  </h1>
                  <p>
                    {data?.elements?.description?.value.replace(
                      /(<([^>]+)>)/gi,
                      ""
                    )}
                  </p>
                </div>
                <div className="row gy-4">
                  <div className="col-lg-6 contact-main">
                    <div className="contact-container">
                      <form action="" className="contact-form mt-5" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label>NAME</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>EMAIL</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>Got something to share?</label>
                          <textarea                            
                            className="form-control"
                            id="message"
                            name="message"
                            value={message}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-primary !text-left py-2 group"
                          >
                            Submit
                            <span className="float-end ml-4 ">
                              <ArrowRightCircleFill
                                color="#87FCFE"
                                size="1.7em"
                                className="arrow-right-circle-fill"
                              />
                            </span>
                            <span className="clear-both"></span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-end">
                    <div className="contact-img ps-0 ps-lg-5">
                      <div className="position-relative">
                        <img
                          src={data?.elements?.contactus_img?.value[0]?.url}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="section-with-background my-3"
              style={{
                backgroundImage: `url(${data?.elements?.background_img?.value[0]?.url})`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-md-2">
                    <div className="header-content">
                      <h2>
                        {data?.elements?.we_unfold?.value.replace(
                          /(<([^>]+)>)/gi,
                          ""
                        )}
                      </h2>
                    </div>
                  </div>
                  <div className="col-md-10">
                    <CityLocations data={data} />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
