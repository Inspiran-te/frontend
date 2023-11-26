export interface IInputsData {

    contact: {
        name: string,
        surname: string,
        email: string,
        phone: string,
        linkedin: string,
        github: string,
        behance: string,
        site: string,
        country: string
    },
    summary: {
        summary: string
    }
    skill: {
        skills: string
       
    },
    education: {
        institutions: [
            {
                name: string,
                position: string,
                startDate: Date | null,
                endDate: Date | null,
                description: string
            }
        ]
    },
    experience: {
        companies: [
            {
                name: string,
                position: string,
                startDate: Date | null,
                endDate: Date | null,
                description: string
            }
        ]
    }
} 
