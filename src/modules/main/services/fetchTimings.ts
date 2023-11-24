import { defineService, Data } from "@skyslit/ark-backend";
import axios from 'axios';

export default defineService("fetch-timings", (props) => {

    props.defineLogic(async (props) => {
        let response: any = null

        await new Promise(async (operationComplete, error) => {
            const { country, city } = props.args.input;

            console.log("country", country, city)

            try {
                response = await axios.get(
                    'http://api.aladhan.com/v1/timingsByCity',
                    {
                        params: {
                            city: city,
                            country: country,
                            method: 8,
                        },
                    })
            } catch (error) {
                console.error('Error fetching prayer times:', error);
            }
            operationComplete(true)
        });
        return props.success({ message: "fetched" }, response.data);
    });
});