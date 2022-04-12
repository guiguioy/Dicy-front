import request from 'umi-request';

/**
 * GET /activity/list
 * 获取抽奖活动：
 */
export async function getActivetyList() {
  return request(`/mock/activity/list`);
}
/**
 * GET /game/list
 * 获取抽奖游戏：
 */
export async function getGameList() {
  return request(`/mock/game/list`);
}
/**
 * GET /food/list
 * 获取吃什么：
 */
export async function getFoodList() {
  return request(`/mock/food/list`);
}
