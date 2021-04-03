const URL = 'https://orchestrationflow.azurewebsites.net/flow';

/**
 * FIND ALL FLOWS
 */
export const findAllFlows = () => {
  return fetch(`${URL}`).then(response => response.json());
}

/**
 * FIND PROCESS BY FLOW
 *
 * @param {number} flowId
 */
export const findFlowById = (flowId) => {
  return fetch(`${URL}/${flowId}`).then(response => response.json());
}

/**
 * FIND PROCESS BY ID
 *
 * @param {number} processId
 */
export const findProcessById = (processId) => {
  return fetch(`${URL}/process/${processId}`).then(response => response.json());
}

export const API = {
  findAllFlows, findFlowById, findProcessById
}