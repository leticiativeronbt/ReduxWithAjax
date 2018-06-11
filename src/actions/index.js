export function selectJob(job){ //this is an ActionCreatr=or
  return{
    type: 'JOB_SELECTED',
    payload: job
  };
}