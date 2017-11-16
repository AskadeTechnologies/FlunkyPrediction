package org.flunky.prediction.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.flunky.prediction.utils.FlunkyUtils;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "xxflk_retailer_analytics")
@JsonIgnoreProperties(ignoreUnknown = true)
public class RetailerAnalytics {

    private Integer id;
    private Date dayDate;
    private String departmentStore;
    private BigDecimal sharePerc;
    private BigDecimal clientsNr;
    private BigDecimal churn;
    private BigDecimal nextMonthTx;
    private BigDecimal newCustomers;
    private BigDecimal nextYearTx;
    private Date lastUpdateDate;

    public RetailerAnalytics() {
    }

    @Id
    @Column(name = "id")
    public Integer getId() {
        return id;
    }
    @Column(name = "day_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.DATE)
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd", timezone= FlunkyUtils.BUCHAREST_TIME_ZONE)
    public Date getDayDate() {
        return dayDate;
    }
    @Column(name = "department_store")
    public String getDepartmentStore() {
        return departmentStore;
    }
    @Column(name = "share_perc", columnDefinition="Decimal(19,2)")
    public BigDecimal getSharePerc() {
        return sharePerc;
    }
    @Column(name = "clients_nr", columnDefinition="Decimal(19,2)")
    public BigDecimal getClientsNr() {
        return clientsNr;
    }

    @Column(name = "churn", columnDefinition="Decimal(19,2)")
    public BigDecimal getChurn() {
        return churn;
    }
    @Column(name = "next_month_tx", columnDefinition="Decimal(19,2)")
    public BigDecimal getNextMonthTx() {
        return nextMonthTx;
    }
    @Column(name = "new_customers", columnDefinition="Decimal(19,2)")
    public BigDecimal getNewCustomers() {
        return newCustomers;
    }
    @Column(name = "next_year_tx", columnDefinition="Decimal(19,2)")
    public BigDecimal getNextYearTx() {
        return nextYearTx;
    }
    @Column(name = "last_update_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd", timezone= FlunkyUtils.BUCHAREST_TIME_ZONE)
    public Date getLastUpdateDate() {
        return lastUpdateDate;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setDayDate(Date dayDate) {
        this.dayDate = dayDate;
    }

    public void setDepartmentStore(String departmentStore) {
        this.departmentStore = departmentStore;
    }

    public void setSharePerc(BigDecimal sharePerc) {
        this.sharePerc = sharePerc;
    }

    public void setClientsNr(BigDecimal clientsNr) {
        this.clientsNr = clientsNr;
    }

    public void setChurn(BigDecimal churn) {
        this.churn = churn;
    }

    public void setNextMonthTx(BigDecimal nextMonthTx) {
        this.nextMonthTx = nextMonthTx;
    }

    public void setNewCustomers(BigDecimal newCustomers) {
        this.newCustomers = newCustomers;
    }

    public void setNextYearTx(BigDecimal nextYearTx) {
        this.nextYearTx = nextYearTx;
    }

    public void setLastUpdateDate(Date lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate;
    }

    @Override
    public String toString() {
        return "RetailerAnalytics{" +
                "id=" + id +
                ", dayDate=" + dayDate +
                ", departmentStore='" + departmentStore + '\'' +
                ", sharePerc=" + sharePerc +
                ", clientsNr=" + clientsNr +
                ", churn=" + churn +
                ", nextMonthTx=" + nextMonthTx +
                ", newCustomers=" + newCustomers +
                ", nextYearTx=" + nextYearTx +
                ", lastUpdateDate=" + lastUpdateDate +
                '}';
    }
}
