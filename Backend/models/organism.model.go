package models

type Class string

const (
	ANIMAL   Class = "animal"
	PLANT    Class = "plant"
	MUSHROOM Class = "mushroom"
)

type Organism struct {
	ID          int     `json:"id" gorm:"primary_key;autoIncrement"`
	Class       string  `json:"class" gorm:"type:varchar(50)"`
	Name        string  `json:"name" gorm:"type:varchar(100)"`
	Title       string  `json:"title" gorm:"type:varchar(100)"`
	Photos      []Photo `json:"photos" gorm:"foreignkey:OrganismID;constraint:OnDelete:CASCADE;"`
	Description string  `json:"description" gorm:"type:text"`
	Geo         string  `json:"geo" gorm:"type:varchar(100)"`
	Lifestyle   string  `json:"lifestyle" gorm:"type:text"`
	Appearance  string  `json:"appearance" gorm:"type:text"`
	Facts       []Fact  `json:"facts" gorm:"foreignkey:OrganismID;constraint:OnDelete:CASCADE;"`
}
