package models

type Organism struct {
	ID          int     `json:"id" gorm:"primary_key;autoIncrement"`
	Name        string  `json:"name" gorm:"type:varchar(100)"`
	Title       string  `json:"title" gorm:"type:varchar(100)"`
	Photos      []Photo `json:"photos" gorm:"foreignkey:OrganismID"`
	Description string  `json:"description" gorm:"type:text"`
	Geo         string  `json:"geo" gorm:"type:varchar(100)"`
	Lifestyle   string  `json:"lifestyle" gorm:"type:text"`
	Appearance  string  `json:"appearance" gorm:"type:text"`
	Facts       []Fact  `json:"facts" gorm:"foreignkey:OrganismID"`
}
