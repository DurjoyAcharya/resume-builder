export class Resume {
  profilePic: string | undefined;
  name: string | undefined;
  address: string | undefined;
  contactNo: number | undefined;
  email: string | undefined;
  socialProfile: string | undefined;
  experiences: Experience[] = [];
  educations: Education[] = [];
  otherDetails: string | undefined;
  skills: Skill[] = [];

  constructor() {
    this.experiences.push(new Experience());
    this.educations.push(new Education());
    this.skills.push(new Skill());
  }
}

export class Experience {
  employer: string | undefined;
  jobTitle: string | undefined;
  jobDescription: string | undefined;
  startDate: string | undefined;
  experience: number | undefined;
}

export class Education {
  degree: string | undefined;
  college: string | undefined;
  passingYear: string | undefined;
  percentage: number | undefined;
}

export class Skill {
  value: string | undefined;
}
