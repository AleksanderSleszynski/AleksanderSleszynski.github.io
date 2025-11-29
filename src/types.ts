
export interface Award { 
    title: string; 
    issuer: string; 
    date: string; 
}

export interface Certificate { 
    name: string; 
    issuer: string; 
    date: string; 
}

export interface Education { 
    institution: string; 
    area: string; 
    startDate: string; 
    endDate: string; 
}

export interface Project { 
    id: string; 
    title: string; 
    role: string; 
    tech: string[]; 
    summary: string; 
    problem?: string[];
    solution?: string[];
    architecture?: string[];
    result?: string[];
}

export interface Work {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    highlights: string[];
}

export interface ResumeData { 
    basics: {
        name: string;
        label: string;
        summary: string;
        location: string;
        github?: string;
        linkedin?: string;
        [key: string]: any;
    };
    skills: {
        backend: string[];
        devops: string[];
    };
    work: Work[];
    awards?: Award[]; 
    certificates?: Certificate[]; 
    education?: Education[]; 
    [key: string]: any; 
}