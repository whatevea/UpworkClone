import asyncHandler from 'express-async-handler';
import Applied_Vacancy from '../models/applied_vacancy.js';

export const apply_job = asyncHandler(async (req, res) => {

    console.log('req.body is', req.body);

    const { job, user_id, cover_letter, offered_amount, attachment_urls } = req.body;


    const data = { job: job, applier: user_id, cover_letter: cover_letter, offered_amount: offered_amount, attachment_urls: attachment_urls }
    try {
        const job = await Applied_Vacancy.create(data);
        res.status(201).json(job); // Send back the created job with a 201 Created status
    } catch (error) {
        // If there's an error, respond with a 400 Bad Request status and the error message
        res.status(400).json({ message: error.message });
    }
})

export const getSelfAppliedJobs = asyncHandler(async (req, res) => {
    const { userId } = req.body;
    try {
        const appliedVacancies = await Applied_Vacancy.find({ applier: userId })
            .populate('job')
            .exec();
        console.log(appliedVacancies)

        if (!appliedVacancies || appliedVacancies.length === 0) {
            return res.status(404).json({ message: 'No applied vacancies found for the user' });
        }
        res.json(appliedVacancies);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }


})
