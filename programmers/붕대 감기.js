/**
 * Topics: PCCP 기출문제
 *
 * 간단한 구현 문제.
 * 문제에서 요구하는 대로만 진행하면 된다. 따로 꼬아둔 게 없음.
 *
 * 그런데 나는 y를 더하는 곳에다가 sequence를 더했다.... 이거가지고 30분 넘게 날림...
 * 아무리 봐도 sequence 초기화도 잘 했고, health보다 작아질 때 -1 리턴도 잘 했고 어쩌구저쩌구 .... ㅠㅠ
 * 친절한 vscode에서 y를 사용하지 않았음을 보여줘서 그제서야 알았다🤣
 * 이렇게 저렇게 하다가 두가지 풀이가 나왔는데 내부 로직은 똑같다. 조건문이 어디에 위치하고 while문인지 for문인지의 차이만 있을 뿐..
 */

/**
 *
 * @param {Number[]} bandage
 * @param {Number} health
 * @param {Number[][]} attacks
 * @returns {Number}
 */

// bandage = [시전 시간, 초당 회복량, 추가 회복량]
// health = 최대 체력
// attacks = [[공격 시간, 피해량], [공격 시간, 피해량]]

function solution(bandage, health, attacks) {
  const [t, x, y] = bandage;
  let sec = 0;
  let sequence = 0;
  const maxHealth = health;

  while (attacks.length) {
    if (health <= 0) return -1;

    if (attacks.length && attacks[0][0] === sec) {
      const [time, damage] = attacks.shift();
      health -= damage;
      sequence = 0;
    } else {
      if (health > 0) {
        sequence++;
        if (sequence === t) {
          health = Math.min(maxHealth, health + x + y);
          sequence = 0;
        } else {
          health = Math.min(maxHealth, health + x);
        }
      }
    }

    sec++;
  }

  return health <= 0 ? -1 : health;
}

function solution1(bandage, health, attacks) {
  const [t, x, y] = bandage;
  let sec = 0;
  let sequence = 0;
  const maxHealth = health;
  const lastAttack = attacks[attacks.length - 1][0];

  for (let i = 0; i <= lastAttack; i++) {
    if (attacks[0][0] === sec) {
      const [time, damage] = attacks.shift();
      health = health - damage;
      sequence = 0;
      if (health <= 0) return -1;
    } else {
      if (health < maxHealth) {
        sequence++;
        health += x;
        if (sequence === t) {
          health += y;
          sequence = 0;
        }
        if (health > maxHealth) health = maxHealth;
      }
    }

    sec++;
  }

  return health;
}
