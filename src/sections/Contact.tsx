import React, { FC } from "react";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import CityLocations from "./CityLocations";
import { useForm, SubmitHandler } from 'react-hook-form';
import { enqueueSnackbar } from "notistack";
import axios from 'axios';
import { API_LIVE_URL } from "../config";
// import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}
interface Props {
  data: any;
}

const Contact: FC<Props> = ({ data }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data: any) => {
    console.log("formData", data);
    try {
      const response = await axios.post(API_LIVE_URL, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("response", response.data)
      enqueueSnackbar('Thank you for contacting us. We will be in touch shortly.', { anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      }, variant: 'success' })
    } catch (error) {
      console.error('Error:', error);      
      enqueueSnackbar('An error occurred while submitting the form. Please try again later.', { anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right'
      }, variant: 'error' })
    }
    reset();
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
                      <form action="" className="contact-form mt-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                          <label>NAME</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"                            
                            {...register('name', { required: 'Name is required' })}                            
                          />
                          {errors.name && <span className="mt-2 text-red-600">{errors.name.message}</span>}
                        </div>
                        <div className="form-group">
                          <label>EMAIL</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"                                                       
                            {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email address' } })}
                          />
                          {errors.email && <span className="mt-2 text-red-600">{errors.email.message}</span>}
                        </div>
                        <div className="form-group">
                          <label>Got something to share?</label>
                          <input
                            type="text"
                            className="form-control"
                            id="message"                            
                            {...register('message', { required: 'Message is required' })}
                          />
                          {errors.message && <span className="mt-2 text-red-600">{errors.message.message}</span>}
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
