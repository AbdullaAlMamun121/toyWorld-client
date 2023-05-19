import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const UpdateMyToys = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { handleToyUpdate } = props;
    console.log(props);
    console.log(props?.toy?.data?.sellerName);
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Toy
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(handleToyUpdate)}>
                     
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input type="number" className="form-control" {...register('price', { required: true })} defaultValue={props?.toy?.data?.price}/>
                            {errors.price && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Available Quantity</label>
                            <input type="number" className="form-control" {...register('quantity', { required: true })} defaultValue={props?.toy?.data?.quantity} />
                            {errors.quantity && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Detail Description</label>
                            <textarea className="form-control" {...register('description', { required: true })} defaultValue={props?.toy?.data?.description}/>
                            {errors.description && <span className="text-danger">This field is required</span>}
                        </div>

                        <button type="submit" className="btn btn-primary w-25  mb-4 ">Add Toy</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default UpdateMyToys;