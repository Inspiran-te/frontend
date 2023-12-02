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
        skills: string[]

    },
    education: {
        institutions: [
            {
                institutionName: string,
                institutionFaculty: string,
                institutionStartDate: string,
                institutionEndDate: string,
                institutionDescription: string
            }
        ]
    },
    experience: {
        companies: [
            {
                companyName: string,
                companyPosition: string,
                companyStartDate: string,
                companyEndDate: string,
                companyDescription: string
            }
        ]
    }
}

export interface IInstitution {
    name: string,
    position: string,
    startDate: string,
    endDate: string,
    description: string
}
