/**
 * Topic: 2018 KAKAO BLIND RECRUITMENT
 *
 * 너무 어려분데용 ... 풀이는 아래 주석 참고!
 */
/**
 * @param {number} cacheSize
 * @param {string[]} cities
 * @returns {number}
 */
function solution(cacheSize, cities) {
  if (cacheSize === 0) {
    return cities.length * 5;
  }

  const cache = new Map();
  let totalTime = 0;

  cities.forEach((city) => {
    const cityLower = city.toLowerCase();

    if (cache.has(cityLower)) {
      // 캐시 히트
      totalTime += 1;
      // 캐시를 최신으로 업데이트 (가장 최근 사용된 도시로 이동)
      cache.delete(cityLower);
      cache.set(cityLower, true);
    } else {
      // 캐시 미스
      totalTime += 5;
      if (cache.size >= cacheSize) {
        // 캐시가 가득 찼다면 가장 오래된 도시 제거
        const oldestCity = Array.from(cache.keys())[0];
        cache.delete(oldestCity);
      }
      // 새로운 도시 캐시에 추가
      cache.set(cityLower, true);
    }
  });

  return totalTime;
}
