/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE IF NOT EXISTS `gestionedatiutenti` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `gestionedatiutenti`;

CREATE TABLE IF NOT EXISTS `ruoli` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `descrizione` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `ID_utente` int(11) NOT NULL,
  `ID_team` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*!40000 ALTER TABLE `ruoli` DISABLE KEYS */;
REPLACE INTO `ruoli` (`ID`, `descrizione`, `ID_utente`, `ID_team`) VALUES
	(1, 'Full stack developer', 3, 1),
	(2, 'Frontend developer', 1, 1),
	(3, 'Backend developer', 2, 1),
	(4, 'Tester', 2, 1),
	(9, 'AI Engineer', 2, 2),
	(12, 'Big Data Engineer', 1, 2);
/*!40000 ALTER TABLE `ruoli` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `skills` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
REPLACE INTO `skills` (`ID`, `nome`) VALUES
	(1, 'Node.js'),
	(2, 'Python'),
	(3, 'Angular'),
	(4, 'Scala'),
	(5, 'C'),
	(6, 'C++'),
	(7, 'Java'),
	(8, 'C#'),
	(9, 'Android'),
	(10, 'Swift'),
	(11, 'R'),
	(12, 'PyTorch'),
	(13, 'AWS');
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `skillsdipendenti` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ID_dipendente` int(11) NOT NULL,
  `ID_skill` int(11) NOT NULL,
  `descrizione` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `scadenza` date NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*!40000 ALTER TABLE `skillsdipendenti` DISABLE KEYS */;
REPLACE INTO `skillsdipendenti` (`ID`, `ID_dipendente`, `ID_skill`, `descrizione`, `scadenza`) VALUES
	(18, 1, 4, 'Amazon', '2016-06-06'),
	(19, 1, 1, 'Google', '2018-02-06'),
	(20, 1, 2, 'Unict', '2018-11-06'),
	(21, 1, 3, 'Coursera', '2018-06-06'),
	(22, 2, 4, 'Coursera', '2018-06-07'),
	(23, 2, 3, 'Bax', '2018-06-07'),
	(27, 1, 5, 'Coursera', '2018-06-11'),
	(28, 2, 5, 'Unict', '2018-06-28'),
	(29, 2, 1, 'Unict', '2018-06-29'),
	(30, 1, 10, 'Bax', '2018-09-25'),
	(31, 1, 9, 'Google', '2018-06-14'),
	(32, 2, 12, 'Google', '2019-06-14'),
	(33, 3, 7, 'Oracle', '2020-05-10'),
	(34, 3, 3, 'Google', '2018-08-14');
/*!40000 ALTER TABLE `skillsdipendenti` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `tags` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
REPLACE INTO `tags` (`ID`, `nome`) VALUES
	(8, 'AI'),
	(12, 'Backend'),
	(2, 'C'),
	(6, 'CEO'),
	(14, 'CNN'),
	(3, 'Developer'),
	(11, 'Frontend'),
	(9, 'Machine'),
	(4, 'Management'),
	(1, 'Python'),
	(5, 'Research'),
	(13, 'Scienziato'),
	(10, 'Server'),
	(7, 'Web');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `tagsdipendenti` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ID_dipendente` int(11) NOT NULL,
  `ID_tag` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

/*!40000 ALTER TABLE `tagsdipendenti` DISABLE KEYS */;
REPLACE INTO `tagsdipendenti` (`ID`, `ID_dipendente`, `ID_tag`) VALUES
	(1, 1, 1),
	(2, 2, 2),
	(3, 1, 3),
	(11, 1, 2),
	(12, 2, 13),
	(13, 2, 14),
	(14, 2, 8),
	(15, 2, 1);
/*!40000 ALTER TABLE `tagsdipendenti` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `teams` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `descrizione` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
REPLACE INTO `teams` (`ID`, `nome`, `descrizione`) VALUES
	(1, 'Cons', 'Sviluppo Web'),
	(2, 'M.Learning', 'Intelligenza Artificiale');
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `utenti` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `nome` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `cognome` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*!40000 ALTER TABLE `utenti` DISABLE KEYS */;
REPLACE INTO `utenti` (`ID`, `username`, `password`, `admin`, `nome`, `cognome`, `email`) VALUES
	(1, 'andrea', 'root', 1, 'andrea', 'consolino', 'andre@conso.lino'),
	(2, 'rick', 'morty', 0, 'rick', 'sanchez', 'r.sanchez@gmail.com'),
	(3, 'bojack', 'horseman', 0, 'bojack', 'horseman', 'b.horse@live.it');
/*!40000 ALTER TABLE `utenti` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
