
export interface ResponseTypeArray {
     id : number;
        message: string;
        status: string;
        job_id: string;
    
}

export interface PythonArrayType {
     id : number;
    headers: {
          "Content-Type": string;
         "X-API-Key": string;
      }
  
     data: {
      "api": string;
      "model": string;
      "topic": string;
      "language": string;
      "word_count": number;
        }
  }