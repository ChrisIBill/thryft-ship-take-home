"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/button";

import { ShippingFormInput } from "./inputs";

import { useFormStore } from "@/lib/formStore";
import {
  validateEmail,
  validateGeneric,
  validateZipCode,
} from "@/utils/validation";

export default function ShippingForm() {
  const router = useRouter();

  const {
    instagram,
    product,
    email,
    confirmEmail,
    firstName,
    lastName,
    address,
    address2,
    city,
    state,
    zip,
    setInstagram,
    setProduct,
    setEmail,
    setConfirmEmail,
    setFirstName,
    setLastName,
    setAddress,
    setAddress2,
    setCity,
    setState,
    setZip,
  } = useFormStore();
  const [instagramError, setInstagramError] = useState<string | null>();
  const [productError, setProductError] = useState<string | null>();
  const [emailError, setEmailError] = useState<string | null>();
  const [confirmEmailError, setConfirmEmailError] = useState<string | null>();
  const [firstNameError, setFirstNameError] = useState<string | null>();
  const [lastNameError, setLastNameError] = useState<string | null>();
  const [addressError, setAddressError] = useState<string | null>();
  const [address2Error, setAddress2Error] = useState<string | null>();
  const [cityError, setCityError] = useState<string | null>();
  const [stateError, setStateError] = useState<string | null>();
  const [zipError, setZipError] = useState<string | null>("");

  const handleSubmit = (e: any) => {
    console.log({
      instagram,
      product,
      email,
      confirmEmail,
      address,
      address2,
      city,
      state,
      zip,
    });
    if (!instagram) setInstagramError("Please enter an instagram handle");
    else if (!product) setProductError("Please enter a product");
    else if (!email || !validateEmail(email))
      setEmailError("Please enter an email");
    else if (!confirmEmail) setConfirmEmailError("Please confirm your email");
    else if (email !== confirmEmail)
      setConfirmEmailError("Emails do not match");
    else if (!firstName) setFirstNameError("Please enter your first name");
    else if (!lastName) setLastNameError("Please enter your last name");
    else if (!address) setAddressError("Please enter your address");
    else if (!city) setCityError("Please enter your city");
    else if (!state) setStateError("Please enter your state");
    else if (!zip || !validateZipCode(zip))
      setZipError("Please enter a valid 5 digit zip code");
    else router.push("/shipping/confirmation");
    // window.history.pushState(null, "", "/shipping/confirmation");
  };

  useEffect(() => {
    router.prefetch("/shipping/confirmation");
  }, []);

  return (
    <form action={handleSubmit} onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 items-start justify-center">
        <h1 className="text-xl font-semibold font-sans">
          Your Shipping Information
        </h1>
        <p>
          Your Instagram Handle helps us match your address to your purchase.
        </p>
        <p>We will send your shipment tracking information to your email.</p>
      </div>
      <div className="flex flex-col items-start gap-5">
        <div className="flex gap-3 w-full">
          <ShippingFormInput
            errorMessage={instagramError}
            isInvalid={!!instagramError}
            label="Instagram Handle"
            startContent="@"
            type="Instagram Handle"
            validate={(value: string) => validateGeneric(value)}
            validationBehavior="aria"
            value={instagram}
            onValueChange={(value: string) => {
              setInstagram(value);
              setInstagramError(null);
            }}
          />
          <ShippingFormInput
            errorMessage={productError}
            isInvalid={!!productError}
            label="Product(s)"
            type="Product(s)"
            validate={(value: string) => validateGeneric(value)}
            value={product}
            onValueChange={(value: string) => {
              setProduct(value);
              setProductError(null);
            }}
          />
        </div>
        <div className="flex gap-3 w-full">
          <ShippingFormInput
            errorMessage={emailError}
            isInvalid={!!emailError}
            label="Email"
            type="Email"
            validate={(value: string) => validateEmail(value)}
            onValueChange={(value: string) => {
              setEmail(value);
              setEmailError(null);
            }}
          />
          <ShippingFormInput
            errorMessage={confirmEmailError}
            label="Confirm Email"
            type="Confirm Email"
            validate={(value: string) => {
              if (!value) setConfirmEmailError("please confirm your email");
              else if (value !== email)
                setConfirmEmailError("emails do not match");
              else return null;
            }}
            value={confirmEmail}
            onValueChange={(value: string) => {
              setConfirmEmail(value);
              setConfirmEmailError(null);
            }}
          />
        </div>
        <div className="flex gap-3 w-full">
          <ShippingFormInput
            errorMessage={firstNameError}
            isInvalid={!!firstNameError}
            label="First Name"
            type="First Name"
            validate={(value: string) => validateGeneric(value)}
            value={firstName}
            onValueChange={(value: string) => {
              setFirstName(value);
              setFirstNameError(null);
            }}
          />
          <ShippingFormInput
            errorMessage={lastNameError}
            isInvalid={!!lastNameError}
            label="Last Name"
            type="Last Name"
            validate={(value: string) => validateGeneric(value)}
            value={lastName}
            onValueChange={(value: string) => {
              setLastName(value);
              setLastNameError(null);
            }}
          />
        </div>
        <div className="flex gap-3 w-full">
          <ShippingFormInput
            link
            navigation
            soft
            without
            errorMessage={addressError}
            isInvalid={!!addressError}
            label="Address Line 1"
            type="Address Line 1"
            validate={(value: string) => validateGeneric(value)}
            onValueChange={(value: string) => {
              setAddress(value);
              setAddressError(null);
            }}
          />
          <ShippingFormInput
            errorMessage={address2Error}
            isInvalid={!!address2Error}
            label="Apartment, Suite, etc. (opt)"
            type="Apartment, Suite, etc."
            onValueChange={(value: string) => {
              setAddress2(value);
              setAddress2Error(null);
            }}
          />
        </div>
        <div className="flex gap-3 w-full">
          <ShippingFormInput
            errorMessage={cityError}
            isInvalid={!!cityError}
            label="City"
            placeholder="City"
            type="City"
            validate={(value: string) => validateGeneric(value)}
            onValueChange={(value: string) => {
              setCity(value);
              setCityError(null);
            }}
          />
          <ShippingFormInput
            errorMessage={stateError}
            isInvalid={!!stateError}
            label="State"
            placeholder="State"
            type="State"
            validate={(value: string) => validateGeneric(value)}
            onValueChange={(value: string) => {
              setState(value);
              setStateError(null);
            }}
          />
          <ShippingFormInput
            errorMessage={zipError}
            isInvalid={!!zipError}
            label="Zip Code"
            placeholder="XXXXX"
            type="Zip Code"
            validate={(value: string) => validateZipCode(value)}
            onValueChange={(value: string) => {
              setZip(value);
              setZipError(null);
            }}
          />
        </div>
      </div>
      <div className="flex gap-3 pt-5 w-full items-center justify-center">
        <Button className="bg-[#565BD7]" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
}

// const InstagramFormInput = () => {
//   const [instagram, setInstagram] = useFormStore(
//     useShallow((state) => [state.instagram, state.setInstagram]),
//   );
//   const [instagramError, setInstagramError] = useState<string | null>(null);
//
//   return (
//     <ShippingFormInput
//       errorMessage={instagramError}
//       isInvalid={!!instagramError}
//       label="Instagram Handle"
//       startContent="@"
//       type="Instagram Handle"
//       // validate={(value: string) => {
//       //   const error = validateGeneric(value);
//       //
//       //   setInstagramError(error);
//       //
//       //   return error;
//       // }}
//       validationBehavior="aria"
//       value={instagram}
//       onValueChange={(value: string) => {
//         setInstagram(value);
//         setInstagramError(null);
//       }}
//     />
//   );
// };
//
// const ProductFormInput = () => {
//   const [product, setProduct] = useFormStore(
//     useShallow((state) => [state.product, state.setProduct]),
//   );
//   const [productError, setProductError] = useState<string | null>(null);
//
//   return (
//     <ShippingFormInput
//       errorMessage={productError}
//       isInvalid={!!productError}
//       label="Product(s)"
//       type="Product(s)"
//       // validate={(value: string) => {
//       //   const error = validateGeneric(value);
//       //
//       //   setProductError(error);
//       //
//       //   return error;
//       // }}
//       value={product}
//       onValueChange={(value: string) => {
//         setProduct(value);
//         setProductError(null);
//       }}
//     />
//   );
// };
//
// const EmailFormInput = () => {
//   const [email, setEmail] = useFormStore(
//     useShallow((state) => [state.email, state.setEmail]),
//   );
//   const [emailError, setEmailError] = useState<string | null>(null);
//
//   return (<ShippingFormInput
//             errorMessage={emailError}
//             isInvalid={!!emailError}
//             label="Email"
//             type="Email"
//             value={email}
//             onValueChange={(value: string) => {
//               setEmail(value);
//               setEmailError(null);
//             }}
//           />
//           <ShippingFormInput
//             errorMessage={confirmEmailError}
//             isInvalid={!!confirmEmailError}
//             label="Confirm Email"
//             type="Confirm Email"
//             // validate={(value: string) => {
//             //   if (!value) setConfirmEmailError("please confirm your email");
//             //   else if (value !== email)
//             //     setConfirmEmailError("emails do not match");
//             //   else return null;
//             //
//             //   return confirmEmailError;
//             // }}
//             value={confirmEmail}
//             onValueChange={(value: string) => {
//               setConfirmEmail(value);
//               setConfirmEmailError(null);
//             }}
//           />
//         </div>
//         <div className="flex gap-3 w-full">
//           <ShippingFormInput
//             errorMessage={firstNameError}
//             isInvalid={!!firstNameError}
//             label="First Name"
//             type="First Name"
//             // validate={(value: string) => {
//             //   const error = validateGeneric(value);
//             //
//             //   setFirstNameError(error);
//             //
//             //   return error;
//             // }}
//             value={firstName}
//             onValueChange={(value: string) => {
//               setFirstName(value);
//               setFirstNameError(null);
//             }}
//           />
//           <ShippingFormInput
//             errorMessage={lastNameError}
//             isInvalid={!!lastNameError}
//             label="Last Name"
//             type="Last Name"
//             // validate={(value: string) => {
//             //   const error = validateGeneric(value);
//             //
//             //   setLastNameError(error);
//             //
//             //   return error;
//             // }}
//             value={lastName}
//             onValueChange={(value: string) => {
//               setLastName(value);
//               setLastNameError(null);
//             }}
//           />
//         </div>
//         <div className="flex gap-3 w-full">
//           <ShippingFormInput
//             errorMessage={addressError}
//             isInvalid={!!addressError}
//             label="Address Line 1"
//             type="Address Line 1"
//             // validate={(value: string) => {
//             //   const error = validateGeneric(value);
//             //
//             //   setAddressError(error);
//             //
//             //   return error;
//             // }}
//             onValueChange={(value: string) => {
//               setAddress(value);
//               setAddressError(null);
//             }}
//           />
//           <ShippingFormInput
//             errorMessage={address2Error}
//             isInvalid={!!address2Error}
//             label="Apartment, Suite, etc. (opt)"
//             type="Apartment, Suite, etc."
//             onValueChange={(value: string) => {
//               setAddress2(value);
//               setAddress2Error(null);
//             }}
//           />
//         </div>
//         <div className="flex gap-3 w-full">
//           <ShippingFormInput
//             errorMessage={cityError}
//             isInvalid={!!cityError}
//             label="City"
//             placeholder="City"
//             type="City"
//             // validate={(value: string) => {
//             //   const error = validateGeneric(value);
//             //
//             //   setCityError(error);
//             //
//             //   return error;
//             // }}
//             onValueChange={(value: string) => {
//               setCity(value);
//               setCityError(null);
//             }}
//           />
//           <ShippingFormInput
//             errorMessage={stateError}
//             isInvalid={!!stateError}
//             label="State"
//             placeholder="State"
//             type="State"
//             // validate={(value: string) => {
//             //   const error = validateGeneric(value);
//             //
//             //   setCityError(error);
//             //
//             //   return error;
//             // }}
//             onValueChange={(value: string) => {
//               setState(value);
//               setStateError(null);
//             }}
//           />
//           <ShippingFormInput
//             errorMessage={zipError}
//             isInvalid={!!zipError}
//             label="Zip Code"
//             placeholder="XXXXX"
//             type="Zip Code"
//             // validate={(value: string) => {
//             //   const error = validateGeneric(value);
//             //
//             //   setCityError(error);
//             //
//             //   return error;
//             // }}
//             onValueChange={(value: string) => {
//               setZip(value);
//               setZipError(null);
//             }}
//           />
//         </div>
