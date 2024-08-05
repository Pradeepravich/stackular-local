export const api = {    
    department: (companyId: string) => `Department?companyId=${companyId}`,    
    addDepartment: (companyId: number) => `Department?companyId=${companyId}`,
    getAllGlCode: (companyId: string) => `GLCode/All?companyId=${companyId}`,
    undeleteGLCode: (companyId: string) => `GLCode/UnDelete?companyId=${companyId}`,
  };
  