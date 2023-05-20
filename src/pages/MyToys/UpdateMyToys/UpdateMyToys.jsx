import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useTitle from '../../../hooks/useTitle';

const UpdateMyToys = (props) => {
    useTitle('Update Toy');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { handleToyUpdate } = props;
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
                            <input type="number" className="form-control" {...register('price', { required: true })} defaultValue={props?.toy?.data?.price} />
                            {errors.price && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Available Quantity</label>
                            <input type="number" className="form-control" {...register('quantity', { required: true })} defaultValue={props?.toy?.data?.quantity} />
                            {errors.quantity && <span className="text-danger">This field is required</span>}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Detail Description</label>
                            <textarea className="form-control" {...register('description', { required: true })} defaultValue={props?.toy?.data?.description} />
                            {errors.description && <span className="text-danger">This field is required</span>}
                        </div>
                        <input type="text" className="form-control d-none" {...register('_id', { required: true })} value={props?.toy?._id} />

                        <button type="submit" className="btn btn-primary w-25  mb-4 ">Update Toy</button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default UpdateMyToys;