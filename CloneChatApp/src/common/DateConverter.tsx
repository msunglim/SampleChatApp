export function lastMessageDate(givenDate: string) {
  // 현재 날짜와 시간을 가져오기
  const currentDate = new Date();

  const targetDate = new Date(givenDate);

  // 오늘과 대상 날짜를 비교
  if (
    currentDate.getDate() === targetDate.getDate() &&
    currentDate.getMonth() === targetDate.getMonth() &&
    currentDate.getFullYear() === targetDate.getFullYear()
  ) {
    // 오늘과 대상 날짜가 일치하면 시간과 분을 표시
    const hours = targetDate.getHours();
    const minutes = targetDate.getMinutes();
    return hours + ':' + minutes;
  } else {
    // 일치하지 않으면 월과 일을 표시
    const month = targetDate.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줍니다.
    const day = targetDate.getDate();
    return month + '/' + day;
  }
}
export function formatDateToCustomString(date:Date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month starts from 0
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}
