import React, { useState } from 'react';

export const Enquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        days: '',
        startDate: '',
        members: '',
        acOption: 'non-ac',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = 'Name is required';
        if (!formData.email) errors.email = 'Email is required';
        if (!formData.days) errors.days = 'Number of days is required';
        if (!formData.startDate) errors.startDate = 'Starting date is required';
        if (!formData.members) errors.members = 'Number of members is required';
        if (!formData.message) errors.message = 'Message is required';
        else if (formData.message.length < 10) errors.message = 'Message should be at least 10 characters';
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);

            // Simulate form submission
            setTimeout(() => {
                setIsSubmitting(false);
               
                setFormStatus('Form submitted successfully!');
                setFormData({ name: '', email: '', days: '', startDate: '', members: '', acOption: 'non-ac', message: '' });
            }, 2000);
        }
    };

    return (
        <div className="enquiry-form p-8 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Enquiry Form</h2>
            {formStatus && <div className="status mb-4 text-green-500">{formStatus}</div>}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">How many days:</label>
                    <input
                        type="number"
                        name="days"
                        value={formData.days}
                        onChange={handleChange}
                        className={`w-full p-2 border ${errors.days ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.days && <span className="text-sm text-red-500">{errors.days}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Starting date:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleChange}
                        className={`w-full p-2 border ${errors.startDate ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.startDate && <span className="text-sm text-red-500">{errors.startDate}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">How many members:</label>
                    <input
                        type="number"
                        name="members"
                        value={formData.members}
                        onChange={handleChange}
                        className={`w-full p-2 border ${errors.members ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {errors.members && <span className="text-sm text-red-500">{errors.members}</span>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">AC or Non-AC:</label>
                    <div className="flex space-x-4">
                        <label>
                            <input
                                type="radio"
                                name="acOption"
                                value="ac"
                                checked={formData.acOption === 'ac'}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            AC
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="acOption"
                                value="non-ac"
                                checked={formData.acOption === 'non-ac'}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Non-AC
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    ></textarea>
                    {errors.message && <span className="text-sm text-red-500">{errors.message}</span>}
                </div>

                <div className="flex justify-end gap-6">

                <button
                    type="submit"
                
                    className="w-44 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 disabled:bg-gray-400" onClick={()=>window.location.href='/'}
                >
                    Go to home
                    
                </button>



                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-44 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 disabled:bg-gray-400"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>

                </div>

           
            </form>
        </div>
    );
};



