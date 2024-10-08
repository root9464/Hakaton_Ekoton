import { SvgIconsProps } from '@shared/types/SvgIcons';

export const Lion = ({ width = 100, height = 109, fill, className }: SvgIconsProps) => (
  <svg width={width} height={height} viewBox='0 0 100 109' className={className}>
    <path
      d='M5.31833 99.3906L0 113.127H100L94.6799 99.3906C92.8012 94.5367 88.7488 90.8835 83.8413 89.6156L72.5498 86.6989C74.9781 85.0519 76.7602 82.5959 77.5854 79.6919C78.0419 78.0866 79.2903 76.7969 80.8442 76.3272C83.8835 75.4039 86.4312 73.3361 88.0131 70.5028C89.5969 67.6695 90.0569 64.3556 89.3107 61.1758C88.9297 59.5488 89.3862 57.7875 90.5029 56.5777C92.6906 54.2069 93.8951 51.0998 93.8951 47.8275C93.8951 44.5553 92.6906 41.4481 90.5046 39.0792C89.5424 38.0362 89.107 36.5851 89.2387 35.1612L89.409 35.0578C95.4261 31.9688 99.1625 25.7418 99.1625 18.8055C99.1625 8.8038 91.2859 0.666748 81.6045 0.666748C76.4073 0.666748 71.5525 3.01935 68.2042 7.11145C66.4729 6.75412 64.675 6.77588 62.9174 7.21484C61.3478 7.61389 59.6411 7.13866 58.4665 5.98141C56.1734 3.72494 53.1657 2.48062 50 2.48062C46.8343 2.48062 43.8266 3.72494 41.5318 5.98322C40.3589 7.13866 38.654 7.60845 37.0808 7.21665C35.3232 6.77588 33.5253 6.75593 31.7941 7.11326C28.4475 3.01935 23.5927 0.666748 18.3955 0.666748C8.71405 0.666748 0.837518 8.8038 0.837518 18.8055C0.837518 25.7418 4.57387 31.9688 10.4839 34.998L10.7613 35.1667C10.893 36.5888 10.4576 38.038 9.49538 39.0792C7.30941 41.4481 6.10493 44.5553 6.10493 47.8275C6.10493 51.0998 7.30941 54.2069 9.49538 56.5759C10.6121 57.7857 11.0686 59.547 10.6876 61.174C9.94136 64.3538 10.4014 67.6659 11.9851 70.501C13.5688 73.3343 16.1148 75.4021 19.1558 76.3272C20.7097 76.7969 21.9581 78.0866 22.4128 79.6919C23.2398 82.5959 25.0202 85.0501 27.4485 86.6971L16.1569 89.6138C11.2512 90.8817 7.19879 94.5367 5.31833 99.3906ZM58.7316 53.4179C58.5543 51.1524 57.1935 49.2333 55.2674 48.3517V46.4871C55.2674 43.9567 55.7432 41.4608 56.658 39.1318L56.8108 39.2896C58.7421 41.2867 61.3126 42.3859 64.0464 42.3859C66.7802 42.3859 69.3507 41.2867 71.2821 39.2896L73.3294 37.1746L71.3857 34.1636C69.5772 31.3612 66.552 29.6888 63.2914 29.6888C59.8939 29.6888 56.6984 31.5571 54.9514 34.5663C52.8602 38.1668 51.7558 42.2879 51.7558 46.4871V47.8275H48.2442V46.4871C48.2442 42.2898 47.1398 38.1668 45.0486 34.5681C43.3016 31.5571 40.1043 29.6888 36.7086 29.6888C33.4498 29.6888 30.4228 31.3612 28.6161 34.1636L26.6724 37.1746L28.7197 39.2896C30.6493 41.2867 33.2198 42.3859 35.9536 42.3859C38.6874 42.3859 41.2579 41.2867 43.1892 39.2896L43.342 39.1318C44.2568 41.459 44.7326 43.9567 44.7326 46.4871V48.3517C42.8082 49.2333 41.4457 51.1524 41.2684 53.4161C38.6663 54.655 36.4434 56.3999 34.7192 58.4967L26.4845 49.9897C23.533 46.9424 21.9072 42.8865 21.9072 38.5749C21.9072 29.6743 28.9163 22.4333 37.532 22.4333C41.7056 22.4333 45.6298 24.1129 48.5813 27.1602L50 28.6258L51.4187 27.1602C54.3702 24.1129 58.2944 22.4333 62.468 22.4333C71.0837 22.4333 78.0928 29.6743 78.0928 38.5749C78.0928 42.8865 76.467 46.9405 73.5172 49.9897L65.2825 58.4967C63.5548 56.4017 61.332 54.655 58.7316 53.4179ZM51.1536 61.6638C50.6707 62.4963 49.3293 62.4963 48.8464 61.6638L45.0715 55.161C44.8485 54.7801 44.7326 54.3466 44.7326 53.904C44.7326 52.5545 45.7948 51.4553 47.1012 51.4553H52.8988C54.2051 51.4553 55.2674 52.5527 55.2674 53.904C55.2674 54.3466 55.1515 54.7801 54.9303 55.161L51.1536 61.6638ZM58.391 35.7906C59.5586 34.2489 61.3758 33.3165 63.2914 33.3165C65.3738 33.3165 67.3069 34.3849 68.4623 36.1752L68.8099 36.7139L68.7994 36.7248C66.2605 39.3458 61.8324 39.3458 59.2935 36.7248L58.391 35.7906ZM41.609 35.7906L40.7065 36.7248C38.1676 39.3458 33.7395 39.3458 31.2006 36.7248L31.1901 36.7139L31.5377 36.1752C32.6931 34.3849 34.6262 33.3165 36.7086 33.3165C38.6241 33.3165 40.4414 34.2489 41.609 35.7906ZM42.0831 57.0674L45.8352 63.5303C46.3918 64.4898 47.2592 65.1791 48.2442 65.5799V68.8431L47.2153 69.906C45.1452 72.0446 42.3939 73.2218 39.4652 73.2218V76.8495C43.3315 76.8495 46.966 75.2951 49.698 72.4708L50 72.1589L50.302 72.4708C53.034 75.2951 56.6685 76.8495 60.5348 76.8495V73.2218C57.6061 73.2218 54.8548 72.0446 52.7847 69.906L51.7558 68.8431V65.5799C52.7408 65.1791 53.6082 64.4898 54.1648 63.5303L57.9169 57.0674C62.7454 59.6467 65.8022 64.3918 65.8022 69.594C65.8022 77.595 58.7123 84.105 50 84.105C41.2877 84.105 34.1978 77.595 34.1978 69.594C34.1978 64.3918 37.2529 59.6467 42.0831 57.0674ZM39.4652 84.7762C42.4975 86.639 46.1126 87.7328 50 87.7328C53.8873 87.7328 57.5025 86.639 60.5348 84.7762V84.9848L50 92.7591L39.4652 84.9848V84.7762ZM62.6506 87.8815L63.8076 88.1808L59.6833 100.963L52.8707 95.099L62.6506 87.8815ZM37.3494 87.8815L47.1293 95.0971L40.3167 100.961L36.1924 88.179L37.3494 87.8815ZM50 97.35L53.5783 100.43H53.5116V109.499H46.4884V100.43H46.4217L50 97.35ZM91.4194 100.736L94.8134 109.499H57.0232V103.396L61.3864 107.152L67.2227 89.0624L82.988 93.1327C86.8069 94.1195 89.9586 96.9618 91.4194 100.736ZM86.921 23.5288C85.3636 21.5336 83.2654 20.0625 80.8442 19.3279C79.2903 18.8581 78.0419 17.5684 77.5872 15.9632C77.3607 15.1651 77.0604 14.4032 76.697 13.6795C78.0033 12.3372 79.7257 11.55 81.6045 11.55C85.4778 11.55 88.6277 14.8041 88.6277 18.8055C88.6277 20.5759 88.0114 22.2265 86.921 23.5288ZM81.6045 4.2945C89.3493 4.2945 95.6509 10.8045 95.6509 18.8055C95.6509 23.5996 93.4105 27.9638 89.6302 30.6955C89.5495 29.355 89.2545 28.0363 88.7664 26.7793C90.919 24.7242 92.1393 21.88 92.1393 18.8055C92.1393 12.8034 87.4144 7.92225 81.6045 7.92225C78.969 7.92225 76.5109 8.91988 74.6006 10.6902C73.8227 9.86673 72.9343 9.1448 71.9475 8.55711C71.8861 8.52083 71.8211 8.49181 71.7597 8.45735C74.3758 5.79458 77.8839 4.2945 81.6045 4.2945ZM4.34912 18.8055C4.34912 10.8045 10.6507 4.2945 18.3955 4.2945C22.1161 4.2945 25.6242 5.79458 28.2421 8.45553C28.1806 8.49181 28.1157 8.51902 28.0542 8.5553C27.0675 9.1448 26.179 9.86491 25.4012 10.6902C23.4891 8.91988 21.031 7.92225 18.3955 7.92225C12.5856 7.92225 7.86073 12.8034 7.86073 18.8055C7.86073 21.88 9.08101 24.7242 11.2354 26.7793C10.7438 28.0418 10.4488 29.3659 10.3698 30.7136C6.61411 28.0236 4.34912 23.6304 4.34912 18.8055ZM13.079 23.5288C11.9886 22.2265 11.3723 20.5759 11.3723 18.8055C11.3723 14.8041 14.5222 11.55 18.3955 11.55C20.2743 11.55 21.9985 12.3372 23.3048 13.6795C22.9413 14.4032 22.6411 15.1669 22.4146 15.965C21.9581 17.5703 20.7097 18.8599 19.1558 19.3297C16.7346 20.0643 14.6364 21.5354 13.079 23.5288ZM32.7334 85.0483C31.7098 84.8705 30.7248 84.5023 29.8083 83.9563C27.8523 82.79 26.4231 80.9126 25.784 78.6707C24.9956 75.8936 22.8342 73.6608 20.1478 72.8463C17.9759 72.1861 16.1587 70.7096 15.0279 68.6871C13.8972 66.6646 13.5671 64.2993 14.1009 62.0284C14.761 59.2132 13.9709 56.1659 12.0378 54.0709C10.4769 52.3804 9.61653 50.162 9.61653 47.8275C9.61653 45.4931 10.4769 43.2747 12.036 41.5842C13.9692 39.491 14.761 36.4418 14.0991 33.6267C13.5653 31.3557 13.8954 28.9904 15.0262 26.968C16.1569 24.9455 17.9742 23.469 20.1443 22.8105C22.8325 21.9943 24.9939 19.7614 25.7822 16.9862C26.4213 14.7424 27.8505 12.8651 29.8065 11.6987C31.766 10.527 34.0555 10.1896 36.2521 10.741C38.9718 11.423 41.9233 10.6086 43.953 8.6079C45.5929 6.99536 47.7385 6.10838 50 6.10838C52.2615 6.10838 54.4071 6.99536 56.0452 8.6079C58.0749 10.6068 61.0212 11.4248 63.7462 10.741C65.9427 10.1878 68.2323 10.5288 70.1917 11.6987C72.1477 12.8651 73.5769 14.7424 74.216 16.9844C75.0044 19.7614 77.1658 21.9943 79.8522 22.8087C82.0241 23.469 83.8413 24.9455 84.9721 26.968C86.1028 28.9904 86.4329 31.3557 85.8991 33.6267C85.239 36.4418 86.0291 39.4891 87.9622 41.5842C89.5231 43.2747 90.3835 45.4931 90.3835 47.8275C90.3835 50.162 89.5231 52.3804 87.964 54.0709C86.0308 56.1641 85.239 59.2132 85.9009 62.0284C86.4347 64.2993 86.1046 66.6646 84.9738 68.6871C83.8431 70.7096 82.0258 72.1861 79.8557 72.8445C77.1675 73.6608 75.0061 75.8936 74.2178 78.6689C73.5787 80.9126 72.1495 82.79 70.1935 83.9563C69.2787 84.5023 68.2937 84.8705 67.2174 85.0573L66.6503 85.1734L64.0464 84.5023V82.0046C67.3017 78.7559 69.3138 74.3954 69.3138 69.594C69.3138 66.739 68.594 63.9982 67.2999 61.5422L75.9999 52.5545C79.6134 48.8215 81.6045 43.857 81.6045 38.5749C81.6045 27.6754 73.0186 18.8055 62.468 18.8055C57.8432 18.8055 53.4695 20.4888 50 23.5742C46.5323 20.4888 42.1568 18.8055 37.532 18.8055C26.9814 18.8055 18.3955 27.6754 18.3955 38.5749C18.3955 43.8551 20.3866 48.8197 24.0001 52.5545L32.7001 61.5422C31.406 63.9982 30.6862 66.739 30.6862 69.594C30.6862 74.3954 32.6983 78.7559 35.9536 82.0046V84.5023L33.4691 85.1444L32.7334 85.0483ZM32.7756 89.0624L38.6119 107.152L42.9768 103.396V109.499H5.18664L8.57885 100.736C10.0414 96.9618 13.1931 94.1213 17.0102 93.1345L32.7756 89.0624Z'
      fill={fill}
    />
  </svg>
);
