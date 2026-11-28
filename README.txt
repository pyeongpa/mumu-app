MUMU V44 — 배포 안내

기본 배포: 기존과 동일하게 index.html, sw.js를 GitHub 저장소 루트에 덮어쓰면 됩니다. API 없이도 12개 선택지 기반 상세 결과가 정상 표시됩니다.

실제 AI 분석 (선택 기능): api/love-analysis.mjs를 같은 저장소의 api 폴더에 업로드합니다. Vercel에서 Functions 경로가 인식되는지 확인하고, 환경변수 OPENAI_API_KEY 및 MUMU_AI_ENABLED=true를 설정한 뒤 재배포하세요. MUMU_AI_MODEL은 선택이며 기본 gpt-4.1-mini입니다. 기본값으로 AI는 비활성화됩니다.
공개 활성화 전에 Vercel Firewall에서 /api/love-analysis POST에 대한 요청 제한 및 필요 시 접근 제어를 설정하고 API 사용량/비용 알림을 구성하세요. 현재 앱에 계정 인증이 없어 이 엔드포인트 자체는 공개 호출될 수 있습니다. API 키를 HTML이나 GitHub에 넣지 마세요.
AI가 활성화되면 결과 페이지에 선택 버튼과 전송 안내가 나타납니다. 버튼을 누를 때만 12개 선택지 번호를 서버로 전송합니다. 서버는 해당 선택지 텍스트와 로컬 유형을 OpenAI에 전달하며 store:false를 설정합니다. 닉네임·커플 코드·날짜는 전송하지 않습니다. API 오류 시 기존 상세 결과를 유지합니다.
실제 API 호출 및 Vercel 배포 검증은 아직 수행하지 않았습니다.

V41: 4개 독립 결과 카드 및 스크롤 등장 효과.

V42: 분석 본문 강조 제거, 일반 글자 굵기로 통일.

V43: Figma Frame 1에서 렌더링한 16종 캐릭터 이미지 내장. 원본 다운로드 제한으로 축소된 렌더 이미지 사용. 별도 등록 및 외부 이미지 URL 불필요.

V44: 이전 제작 원본 캐릭터 시트와 13번 고해상도 원본으로 교체. 원래 해상도 및 투명 배경 유지, 무손실 WebP 내장.

V45: shop with local coin balance and inventory; 5 coins per new completed mission. No character dressing or server sync yet.
