11.경기도에 위치한 식품창고 목록 출력하기
SELECT warehouse_id, warehouse_name, address, if( freezer_yn is null, 'N', freezer_YN) as freezer_yn
FROM FOOD_WAREHOUSE
where address like '경기도%'
order by warehouse_id asc

-- sql if 조건문 사용

12. 흉부외과 또는 일반외과 의사 목록 출력하기
SELECT dr_name, dr_id, mcdp_cd, date_format(hire_ymd, '%Y-%m-%d') as hire_ymd
FROM DOCTOR
where mcdp_cd = 'CS' OR  mcdp_cd = 'GS'
order by hire_ymd desc, dr_name
--  date format 해서 출력

13. 조건에 맞는 회원수 구하기
SELECT Count(user_id) as users
FROM USER_INFO
where JOINED like '2021%' and age >= 20 and age <= 29