package models

type MammalsFull struct {
	ID          int      `json:"id" gorm:"primary_key;autoIncrement"`
	Name        string   `json:"name" gorm:"type:varchar(100)"`
	Title       string   `json:"title" gorm:"type:varchar(100)"`
	Photos      []string `json:"photos" gorm:"type:varchar(100)[]"`
	Description string   `json:"description" gorm:"type:text"`
	Geo         string   `json:"geo" gorm:"type:varchar(100)"`
	Lifestyle   string   `json:"lifestyle" gorm:"type:text"`
	Appearance  string   `json:"appearance" gorm:"type:text"`
	Facts       []string `json:"facts" gorm:"type:text[]"`
}

type MammalsShort struct {
	ID     int    `json:"id" gorm:"primary_key;autoIncrement"`
	Name   string `json:"name" gorm:"type:varchar(100)"`
	Title  string `json:"title" gorm:"type:varchar(100)"`
	Photos string `json:"photos" gorm:"type:varchar(100)"`
}
